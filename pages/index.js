import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../src/layout/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async (id) => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <MainLayout>
      <h2>All posts</h2>
      <ol>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </MainLayout>
  );
}
