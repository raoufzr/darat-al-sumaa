
type Props = {
  author: string;
  text: string;
  rating: number;
};

export default function ReviewCard({
  author,
  text,
  rating,
}: Props) {
  return (
    <div className="bg-white rounded-xl border p-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">{author}</h3>
        <span>{rating} ⭐</span>
      </div>

      <p className="mt-3 text-gray-600">{text}</p>

      <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg">
        Generate Reply
      </button>
    </div>
  );
}
