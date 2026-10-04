import style from './ModuleStyle.module.css';

function ModuleStyle() {
  return (
    <div className={style.box} style={{marginTop: 10}}>
      <button className={style.btn}>Click here!</button>
    </div>
  )
}

export default ModuleStyle
