import { createRef } from 'react'
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default function UploadFile() {
    const fileInputRef = createRef()
    const storage = getStorage();

    const Upload = () => {
        const storageRef = ref(storage, fileInputRef.current.files[0].name);
        uploadBytes(storageRef, fileInputRef.current.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!',snapshot);
          });
    }
    
    return (
        <div>
            <input type="file" ref={fileInputRef} />
            <button onClick={Upload}>Upload</button>
        </div>
    )
}
