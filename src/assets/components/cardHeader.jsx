function CardHeader({ image, category }) {
  return (
    <>
      <h4>{category}</h4>
      <img src={image} alt="Images" />
    </>
  );
}
export default CardHeader;
