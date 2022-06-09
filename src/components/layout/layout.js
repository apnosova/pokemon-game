import s from './layout.module.css';


const Layout = ({title, descr, urlBg, colorBg}) => {
  const styleRoot = {
    backgroundColor: `${colorBg}`,
  }

  if (urlBg) styleRoot.backgroundImage = `url(${urlBg})`;

  return (
    <section className={s.root} style={styleRoot} >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {title && (<h3> {title} </h3>)}
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full} `}>
            {
              descr && (<p> {descr} </p>)
            }
          </div>
        </article>
      </div>
    </section >
  )
}


export default Layout;
