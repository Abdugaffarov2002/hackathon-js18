import { useState } from "react";
import Swipe from "react-easy-swipe";
import {
  Container,
  PostImage,
  ImgDiv,
  Img,
  ImageCounterWrapper,
  ImageCounter,
} from "../../../models/emotions";

const postData = {
  boardImageUrl: [
    "https://m.media-amazon.com/images/I/51f+PAkd28L._AC_UY1100_.jpg",
    "https://m.media-amazon.com/images/I/51f+PAkd28L._AC_UY1100_.jpg",
  ],
};

function ProductSlider() {
  const [positionx, setPositionx] = useState<number>(0);
  const [imgCount, setImgCount] = useState<number>(1);
  const [endSwipe, setEndSwipe] = useState<boolean>(false);

  const onSwipeMove = (position: { x: number }) => {
    setEndSwipe(false);
    if (postData.boardImageUrl.length === 1) {
      return;
    }
    if (imgCount === 1 && position.x < 0) {
      setPositionx(() => position.x);
      return;
    }
    if (imgCount > 1 && imgCount < postData.boardImageUrl.length) {
      setPositionx(() => position.x);
      return;
    }
    if (imgCount === postData.boardImageUrl.length && position.x > 0) {
      setPositionx(() => position.x);
      return;
    }
  };

  const onSwipeEnd = () => {
    if (positionx < -20) {
      setImgCount((imgCount) => imgCount + 1);
    }
    if (positionx > 20) {
      setImgCount((imgCount) => imgCount - 1);
    }
    setPositionx(() => 0);
    setEndSwipe(true);
  };

  return (
    <Container>
      <PostImage>
        <Swipe onSwipeEnd={onSwipeEnd} onSwipeMove={onSwipeMove}>
          <ImgDiv imgCount={imgCount} positionx={positionx} endSwipe={endSwipe}>
            {postData.boardImageUrl.map((imageUrl, index) => {
              return <Img key={index} src={imageUrl} alt="" />;
            })}
          </ImgDiv>
        </Swipe>
      </PostImage>
      {postData.boardImageUrl.length > 1 && (
        <ImageCounterWrapper>
          {postData.boardImageUrl.map((props, index) => {
            return (
              <ImageCounter key={index} index={index} imgCount={imgCount} />
            );
          })}
        </ImageCounterWrapper>
      )}
    </Container>
  );
}
export default ProductSlider;
