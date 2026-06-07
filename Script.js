// PASSO 1 - Importar Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// PASSO 2 - Importar Firestore
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// PASSO 3 - Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdirRN9nHaekNUjM3upyPTSBRVollrlMI",
  authDomain: "deus-fiel-7a2cc.firebaseapp.com",
  projectId: "deus-fiel-7a2cc",
  storageBucket: "deus-fiel-7a2cc.firebasestorage.app",
  messagingSenderId: "746071893459",
  appId: "1:746071893459:web:c7a31b6e8ad49709187b26"
};

// PASSO 4 - Iniciar Firebase
const app = initializeApp(firebaseConfig);

// PASSO 5 - Abrir Firestore
const db = getFirestore(app);

// PASSO 6 - Referência do Documento
const docRef = doc(db, "teste", "usuarios");

// PASSO 7 - Ler Documento
const documento = await getDoc(docRef);

if (documento.exists()) {

  document.getElementById("saldoDisponivel").innerText =
    "R$ " + documento.data().saldoDisponivel;

  document.getElementById("gastosHoje").innerText =
    "R$ " + documento.data().gastosHoje;

  document.getElementById("limiteDiario").innerText =
    "R$ " + documento.data().limiteDiario;

  document.getElementById("restanteHoje").innerText =
    "R$ " + documento.data().restanteHoje;

} else {

  document.getElementById("saldoDisponivel").innerText = "R$ 0";
  document.getElementById("gastosHoje").innerText = "R$ 0";
  document.getElementById("limiteDiario").innerText = "R$ 0";
  document.getElementById("restanteHoje").innerText = "R$ 0";

  console.log("Documento não encontrado");

}
