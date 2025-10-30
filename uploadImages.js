import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Configuração do Cloudinary
cloudinary.config({
  cloud_name: "dzdyokoiv",
  api_key: "946726721337646",
  api_secret: "-j4ImyiKokwoyDuPn8QJNrh9hTw",
});

// ✅ Pega o caminho da imagem específica
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagePath = path.join(__dirname, "public/https://res.cloudinary.com/dzdyokoiv/image/upload/v1761825611/cristiany/riswyekkbv4vd4wkhnts.jpg");

// ✅ Onde salvar o JSON de links
const linksFile = path.join(__dirname, "links.json");

// 🚀 Função para enviar apenas uma imagem
async function uploadImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "cristiany", // pasta no Cloudinary
    });

    const link = result.secure_url;
    fs.writeFileSync(
      linksFile,
      JSON.stringify({ [path.basename(filePath)]: link }, null, 2)
    );
    console.log(`✅ ${path.basename(filePath)} → ${link}`);
    console.log(`📁 Link salvo em: ${linksFile}`);
  } catch (err) {
    console.error(`❌ Erro ao enviar ${filePath}:`, err.message);
  }
}

// 🏁 Executa o upload
uploadImage(imagePath);
