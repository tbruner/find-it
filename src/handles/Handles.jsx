import { doc, getDoc, addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

export async function addNameToLeaderboard(name, time, image) {
  const ref = collection(firestore, `${image}-leaderboard`);

  let data = {
    name: name,
    time: time,
  };

  try {
    await addDoc(ref, data);
  } catch (error) {
    console.error("Error writing new book to Firebase Database", error);
  }
}

export async function handleRequest(image) {
  const imageRef = doc(firestore, "game-images", image);
  const imageSnap = await getDoc(imageRef);
  if (imageSnap.exists()) {
    return imageSnap.data();
  } else {
    console.err("No such data");
  }
}
