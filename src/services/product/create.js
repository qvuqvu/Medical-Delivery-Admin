import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { PRODUCTS } from "../constant/firestore";

// Function create new product
const createNewProduct = async (item) => {
  const docRef = await addDoc(collection(db, PRODUCTS), {
    category: item.category,
    name: item.name,
    quantity: item.quantity,
    gia: item.gia,
    mota: item.mota,
  });
  return docRef.id;
};

export default createNewProduct;
