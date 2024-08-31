export default async function upload_image(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.CLOUDINARY_PRESET);
    formData.append("cloud_name", process.env.CLOUDINARY_NAME);
    const response = await axios.post(
      `http://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`,
      formData
    );
    const image_url = response.data["secure_url"];
    return image_url;
  } catch (error) {
    console.log(error);
    return "";
  }
}
