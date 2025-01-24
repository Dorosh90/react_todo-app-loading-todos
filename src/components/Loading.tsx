export const Loading = () => {
  return (
    <div data-cy="TodoLoader" className="modal overlay isactive">
      <div className="modal-background has-background-white-ter" />
      <div className="loader" />
    </div>
  );
};
