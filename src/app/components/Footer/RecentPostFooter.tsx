

export default function RecentPostsSection() {
    const posts = [
      { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
      { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/recentPost.png" },
      { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/recentPost.png" },
    ]
  
    return (
      <div className="w-[273.83px]">
        <h3 className="text-xl font-bold mb-8">Recent Post</h3>
        {posts.map((post, index) => (
          <div key={index} className="flex  items-center mb-4">
            <img src={post.image} alt="" className="w-16 h-16 object-cover mr-4" />
            <div>
              <h4 className="font-semibold mb-1">{post.title}</h4>
              <p className="text-sm text-gray-400">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  