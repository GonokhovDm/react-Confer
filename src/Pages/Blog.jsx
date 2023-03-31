import News from "../components/News"

function Blog() {
  return (
    <>
      <header>
        <div className="page-header gradient-filter" style={{ backgroundImage: "url(/img/header-blog.jpg)" }}>
          <div className="container">
            <h1>blog</h1>
          </div>
        </div>
      </header>
      <main id="main-blog">
        <div className="container">
          <News />
        </div>
      </main>
    </>
  )
}

export default Blog
