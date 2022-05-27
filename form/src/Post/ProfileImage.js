import React from 'react'

const ProfileImage = ({setProfileImage,}) => {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null)
    
    function handleImageUpload(e){
        const[file] = e.target.files;
        
        if(file){
            const reader = new FileReader();
            const {current} = uploadedImage
            // console.log(current);
            // console.log(file);
          
            current.file = file;

            reader.onload = e =>{
                current.src = e.target.result
                
            };
            
            reader.readAsDataURL(file)

            setProfileImage(file.name)
            // console.log(file.name);
        }
    }

  return (
    <div className='image'>
      <div  style={{ height: '60px', width: '60px', borderRadius: '50%', border: '1px solid gray',marginBottom:'1em'}}
     onClick={() => imageUploader.current.click()}>
          <img   ref={uploadedImage}
          style={{
            width: '60px',
            height: '60px',
            position: "absolute",
            borderRadius: '50%'}}/>
        </div>
        <input type="file" id="img"  accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader} style={{display:'none'}}/>

    </div>
  )
}

export default ProfileImage
