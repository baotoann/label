import React, { useState } from 'react';
import styled from 'styled-components';
import { SmileTwoTone } from "@ant-design/icons";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
// import { IconName } from "react-icons/bi";



// Định nghĩa interface cho một ảnh
interface Image {
  id: number;
  src: string;
  label: string;
  errors: string[];
}

// Props cho component hiển thị danh sách tên ảnh
interface ImageListProps {
  images: Image[];
  onImageNameClick: (image: Image) => void;
}

// Styles cho danh sách tên ảnh
const ImageListContainer = styled.div`
  width: 200px;
  height: auto;
  background-color: #95afc0;
  padding: 0px;
  border-radius: 5px;
`;

const ImageListTitle = styled.h2`
  color: black;
  background-color:#535c68;
  margin-top: 0 ;
  
`;

const ImageListItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin-bottom: 5px;
  &:hover {
    color: #0088cc;
  }
  display: flex;
`;

// Component hiển thị danh sách tên ảnh
const ImageList: React.FC<ImageListProps> = ({ images, onImageNameClick }) => {
  return (
    <ImageListContainer>
      <ImageListTitle>MIND SC</ImageListTitle>
      <ul>
        {images.map((image) => (
          <ImageListItem key={image.id} onClick={() => onImageNameClick(image)}>
            {image.label}
          </ImageListItem>
        ))}
      </ul>
    </ImageListContainer>
  );
};

// Styles cho khu vực hiển thị hình ảnh lớn
const ImageViewerContainer = styled.div`
  margin-left: 20px;
  width: 70%;

`;

const ImageViewerTitle = styled.h2`
  color:#ecf0f1 ;
  background-color: #4834d4;
  width: 100%;
`;

const ImageViewerImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

// Props cho component hiển thị hình ảnh lớn
interface ImageViewerProps {
  selectedImage: Image | null;
}

// Component hiển thị hình ảnh lớn
const ImageViewer: React.FC<ImageViewerProps> = ({ selectedImage }) => {
  return (
    <ImageViewerContainer>
      {/* <ImageViewerTitle>Thông tin hình ảnh</ImageViewerTitle> */}
      {selectedImage ? (
        <div>
          <ImageViewerTitle>{selectedImage.label}</ImageViewerTitle>
          <ImageViewerImage src={selectedImage.src} alt={`Ảnh ${selectedImage.label}`} />
          {/* <p>{selectedImage.label}</p> */}
          <ErrorList errors={selectedImage.errors} />
          <div style={{ marginTop: '10px' }}>
            <button style={{marginRight: '10px', background:'#948f8f',color: 'aliceblue', height:'60px', width:'60px', fontSize:'40px'}}> <AiOutlineArrowLeft /></button>
          <button style={{ marginRight: '10px', background:'red', color:'white',height:'60px', width:'60px',fontSize:'40px' }}><AiOutlineClose /></button>
          <button style={{ marginRight: '10px',background:'green', color:'white', height:'60px', width:'60px', fontSize:'40px' }}><AiOutlineCheck /></button>
          <button style={{ background:'#948f8f', color: 'aliceblue', height:'60px', width:'60px', fontSize:'40px'}}><AiOutlineArrowRight /></button>
        </div>
        </div>
  ) : (
    <p>Chọn một tên ảnh từ danh sách</p>

  )
}
    </ImageViewerContainer >
  );
};

// Ví dụ sử dụng cả hai component ImageList và ImageViewer
const App: React.FC = () => {
  // Danh sách các ảnh
  const images: Image[] = [
    { id: 1, src: 'https://toanthaydinh.com/wp-content/uploads/2020/04/1554798179071_6051976.png', label: 'Buổi sáng', errors: [] },
    { id: 2, src: 'https://th.bing.com/th/id/OIP.OGvl5GXQ3D6VK_RRINlEUQHaEK?rs=1&pid=ImgDetMain', label: 'Buổi chiều', errors: [] },
    // Thêm ảnh
  ];

  // State để theo dõi ảnh được chọn
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // Hàm xử lý sự kiện khi click vào một tên ảnh
  const handleImageNameClick = (image: Image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h1>Ứng dụng hiển thị ảnh</h1>

      <div style={{ display: 'flex' }}>
        <ImageList images={images} onImageNameClick={handleImageNameClick} />
        <ImageViewer selectedImage={selectedImage} />

      </div>
    </div>
  );
};
//props hiển thị lỗi
interface ErrorListProps {
  errors: string[];
}
//style cho listErr
const ErrorListContainer = styled.div`
float: 'right', 
width: '200px', 
backgroundColor: 'black', 
padding: '10px', 
borderRadius: '5px'
margin-left: 20px;
width: 70%;
position: 'absolute', 
top: '0', right: '0', 

`;
const ErrorListTitle = styled.h3`
color:#ecf0f1 ;
  background-color: #4834d4;
  width: 100%;
`
// Component hiển thị danh sách lỗi
const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
  return (
    <ErrorListContainer>

      <ErrorListTitle>Danh sách lỗi</ErrorListTitle>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {errors.map((error, index) => (
          <li key={index} style={{ marginBottom: '5px', color: '#721c24' }}>{error}</li>
        ))}
      </ul>

    </ErrorListContainer>
  );
};

export default App;
