export default function Card({ title, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="cardPreview" />
    </div>
  );
}
