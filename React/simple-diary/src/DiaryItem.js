// 1. props 받아와주기
const DiaryItem = ({
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?!`)) {
      onRemove(id); // 함수 호출 (----> App컴포넌트 onRemove)
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>

      <button onClick={handleRemove}>삭제하기</button>
      <button>수정하기</button>
    </div>
  );
};
export default DiaryItem;
