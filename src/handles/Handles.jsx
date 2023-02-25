import { doc, getDoc, addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

const handleSubmit = (testdata) => {
  const ref = collection(firestore, "test_data"); // Firebase creates this automatically
  let data = {
    testData: testdata,
  };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};

async function handleRequest(image) {
  const imageRef = doc(firestore, "game-images", image);
  const imageSnap = await getDoc(imageRef);
  if (imageSnap.exists()) {
    return imageSnap.data();
  } else {
    console.err("No such data");
  }
}
export default handleRequest;
