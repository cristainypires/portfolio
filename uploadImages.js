import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import url from "url";

// ✅ Configuração do Cloudinary
cloudinary.config({
  cloud_name: "dzdyokoiv", // Teu Cloud Name
  api_key: "946726721337646", // Tua API Key
  api_secret: "-j4ImyiKokwoyDuPn8QJNrh9hTw" // Teu API Secret completo
});

// ✅ Pega o caminho da pasta public
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "public");

// ✅ Onde salvar o JSON de links
const linksFile = path.join(__dirname, "links.json");

// Objeto para armazenar os links
let allLinks = {};

// 📌 Função recursiva para percorrer a pasta public
async function uploadFolder(localFolder, cloudFolder = "") {
  const files = fs.readdirSync(localFolder);

  for (const file of files) {
    const filePath = path.join(localFolder, file);
    const cloudinaryPath = cloudFolder ? `${cloudFolder}/${file}` : file;

    if (fs.statSync(filePath).isDirectory()) {
      await uploadFolder(filePath, cloudinaryPath);
    } else {
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: `ESJB_frontend/${cloudFolder}`, // Mantém a estrutura
        });

        const relativePath = path.relative(publicPath, filePath).replace(/\\/g, "/");
        allLinks[relativePath] = result.secure_url;

        console.log(`✅ ${relativePath} → ${result.secure_url}`);
      } catch (err) {
        console.error(`❌ Erro ao enviar ${file}:`, err.message);
      }
    }
  }
}

// 🚀 Executa o upload e salva o JSON
(async () => {
  await uploadFolder(publicPath);
  fs.writeFileSync(linksFile, JSON.stringify(allLinks, null, 2));
  console.log(`\n📁 Links salvos em: ${linksFile}`);
})();
