function Card({title, subject, message, color = null}){
  return 
    <>
      <div nameClass={color ?? 'bgcolor-warning'}>
        <h2>{title}<h2/>
        <h5>{subject}<h5/>
        <div>
          <p>{message}<p/>
        <div/>
      <div/>
    </>
}
