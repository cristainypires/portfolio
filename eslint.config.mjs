import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const linksFile = path.join(__dirname, "links.json");

// Lê os links do JSON
const links = JSON.parse(fs.readFileSync(linksFile, "utf8"));

// Extensões que vamos buscar para substituir links
const validExtensions = [".html", ".js", ".jsx", ".ts", ".tsx", ".css"];

// Função recursiva para percorrer toda a pasta a partir da raiz do projeto (__dirname)
function replaceInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    // Ignorar a própria pasta node_modules para acelerar
    if (file === "node_modules") continue;

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      replaceInFolder(filePath);
    } else if (validExtensions.includes(path.extname(file))) {
      let content = fs.readFileSync(filePath, "utf8");
      let updated = content;

      // Substitui todos os caminhos encontrados no ficheiro
      for (const [localPath, cloudUrl] of Object.entries(links)) {
        // Para garantir que casos como '/public/images/logo.png' também funcionem,
        // escapamos o localPath e fazemos regex para procurar o caminho em qualquer lugar do texto
        const regex = new RegExp(localPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
        updated = updated.replace(regex, cloudUrl);
      }

      if (updated !== content) {
        fs.writeFileSync(filePath, updated, "utf8");
        console.log(`🔄 Atualizado: ${filePath}`);
      }
    }
  }
}

// Executa a partir da raiz do projeto
replaceInFolder(__dirname);
console.log("✅ Substituição automática concluída!");
