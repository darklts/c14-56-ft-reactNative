import './Trends.css' // Importa el archivo CSS

const Trends = () => {
  const trends = [
    { topic: 'TREND 1', posts: '+ 1000' },
    { topic: 'TREND 2', posts: '+ 1000' },
    { topic: 'TREND 3', posts: '+ 1000' },
    { topic: 'TREND 4', posts: '+ 1000' },
  ]

  // Tomar solo las primeras tres tendencias
  const trendingTopics = trends?.slice(0, 3)

  return (
    <div className="trends-container">
      <h2 className="trend-h2">TRENDS</h2>
      {trendingTopics?.map((trend, index) => (
        <div className="trend-item" key={index}>
          <h3 className="trend-title">{trend?.topic?.toUpperCase()}</h3>
          <p className="trend-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="trend-posts">{trend?.posts} Posts</p>
        </div>
      ))}
      <button className="trend-button">Ver más</button>
    </div>
  )
}

export default Trends
