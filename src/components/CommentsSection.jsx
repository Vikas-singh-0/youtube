import { useState, useEffect } from "react";
import { API_KEY } from "../utils/Constants";

const styleOptions = [
  {
    name: "Modern Light",
    className: "comments-modern-light",
    style: {
      background: "linear-gradient(120deg, #f8fafc 0%, #e3e6ee 100%)",
      color: "#222",
      borderRadius: "16px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      padding: "32px",
      border: "1px solid #e0e4ea",
    },
    inputStyle: {
      border: "1px solid #bfc8d6",
      borderRadius: "8px",
      padding: "12px",
      marginRight: "12px",
      fontSize: "1rem",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
      transition: "border 0.2s",
    },
    buttonStyle: {
      background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "12px 24px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1rem",
      boxShadow: "0 2px 8px rgba(106,130,251,0.12)",
      transition: "background 0.2s",
    },
    commentStyle: {
      background: "#f4f7fa",
      borderRadius: "8px",
      padding: "14px 18px",
      marginBottom: "12px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
      fontSize: "1.05rem",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    iconStyle: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      background: "#e3e6ee",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.3rem",
      marginRight: "8px",
    },
  },
  {
    name: "Elegant Dark",
    className: "comments-elegant-dark",
    style: {
      background: "linear-gradient(120deg, #232526 0%, #414345 100%)",
      color: "#f5f5f5",
      borderRadius: "16px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      padding: "32px",
      border: "1px solid #333",
    },
    inputStyle: {
      border: "1px solid #444",
      borderRadius: "8px",
      padding: "12px",
      background: "#2c2c2c",
      color: "#f5f5f5",
      marginRight: "12px",
      fontSize: "1rem",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      transition: "border 0.2s",
    },
    buttonStyle: {
      background: "linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "12px 24px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1rem",
      boxShadow: "0 2px 8px rgba(252,92,125,0.12)",
      transition: "background 0.2s",
    },
    commentStyle: {
      background: "#2c2c2c",
      borderRadius: "8px",
      padding: "14px 18px",
      marginBottom: "12px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.10)",
      fontSize: "1.05rem",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    iconStyle: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      background: "#444",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.3rem",
      marginRight: "8px",
      color: "#fff",
    },
  },
  {
    name: "Vivid Gradient",
    className: "comments-vivid-gradient",
    style: {
      background: "linear-gradient(135deg, #f6d365 0%, #fd6e6a 50%, #43cea2 100%)",
      color: "#222",
      borderRadius: "20px",
      boxShadow: "0 6px 32px rgba(253,110,106,0.18)",
      padding: "36px",
      border: "1px solid #fd6e6a",
    },
    inputStyle: {
      border: "1px solid #fd6e6a",
      borderRadius: "10px",
      padding: "12px",
      marginRight: "12px",
      fontSize: "1rem",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(253,110,106,0.08)",
      transition: "border 0.2s",
    },
    buttonStyle: {
      background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      padding: "12px 24px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1rem",
      boxShadow: "0 2px 8px rgba(67,206,162,0.12)",
      transition: "background 0.2s",
    },
    commentStyle: {
      background: "#fffbe8",
      borderRadius: "10px",
      padding: "14px 18px",
      marginBottom: "12px",
      boxShadow: "0 1px 6px rgba(253,110,106,0.08)",
      fontSize: "1.05rem",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    iconStyle: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      background: "#fd6e6a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.3rem",
      marginRight: "8px",
      color: "#fff",
    },
  },
];

// User icon component
const UserIcon = ({ style, comment }) => (
  <span style={style} className="rounded-full flex items-center justify-center">
    <img src={comment && comment.image} className="rounded-full overflow-hidden border-black" alt="" />
  </span>
);

const CommentsSection = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(styleOptions[0]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleStyleChange = (e) => {
    const style = styleOptions.find((s) => s.name === e.target.value);
    if (style) setSelectedStyle(style);
  };

  useEffect(() => {
    if (!videoId) return;
    fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched comments:", data.items);
        setComments(
          data.items.map((item) => ({
            text: item.snippet.topLevelComment.snippet.textDisplay,
            id: item.id,
            image: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
          }))
        );
      })
      .catch((err) => {
        console.error("Failed to fetch comments", err);
      });
  }, [videoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Normally, posting a comment requires OAuth and POST request.
      // Here, just simulate adding the comment locally.
      setComments([
        {
          text: input,
          id: `local-${Date.now()}`,
        },
        ...comments,
      ]);
      setInput("");
    }
  };

  return (
    <div className={selectedStyle.className} style={selectedStyle.style}>
      <div style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}>
        <h3 style={{ margin: 0, flex: 1 }}>Comments</h3>
        <select
          value={selectedStyle.name}
          onChange={handleStyleChange}
          style={{
            padding: "6px 12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginLeft: "16px",
            cursor: "pointer",
          }}
        >
          {styleOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "18px", display: "flex" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a comment..."
          style={selectedStyle.inputStyle}
        />
        <button type="submit" style={selectedStyle.buttonStyle}>
          Post
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {comments.map((comment) => {
          console.log("Rendering comment:", comment);
          
          return (
            <li key={comment.id} style={selectedStyle.commentStyle}>
              <UserIcon style={selectedStyle.iconStyle} comment={comment} />
              {comment.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentsSection;
