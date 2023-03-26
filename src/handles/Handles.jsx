import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  collection,
} from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

export async function addNameToLeaderboard(name, time, image) {
  const imageRef = doc(firestore, "leaderboard", image);

  let data = {
    name: name,
    time: time,
  };

  try {
    await updateDoc(imageRef, {
      leaders: arrayUnion(data),
    });
  } catch (error) {
    console.error("Error writing new book to Firebase Database", error);
  }
}

export async function handleImageRequest(image) {
  const imageRef = doc(firestore, "game-images", image);
  const imageSnap = await getDoc(imageRef);
  if (imageSnap.exists()) {
    return imageSnap.data();
  } else {
    console.error("No such data");
  }
}

export async function handleLeaderboardRequest(image) {
  const imageRef = doc(firestore, "leaderboard", image);
  const imageSnap = await getDoc(imageRef);
  if (imageSnap.exists()) {
    return imageSnap.data();
  } else {
    console.error("No such data");
  }
}
