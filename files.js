
function readFile(file) {
  if (file === "novoarquivo.js") {
    return true;
  }

  if (file.length > 0) {
    return file;
  }

  return false;
}