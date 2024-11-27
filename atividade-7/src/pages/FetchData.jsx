import React, { useState, useEffect } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchPosts = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
                throw new Error("Erro ao buscar os posts");
            }
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError("Falha ao carregar os posts");
        } finally {
            setLoading(false);
        }
    };

    // Usando useEffect para buscar os dados quando o componente for montado
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Lista de Posts</h1>

            {loading && <p>Carregando...</p>}

            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>

            <button onClick={fetchPosts} disabled={loading}>
                {loading ? "Recarregando..." : "Recarregar Posts"}
            </button>
        </div>
    );
};

export default PostList;
