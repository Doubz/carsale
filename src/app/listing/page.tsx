"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function ListingPage() {
  const { t } = useLanguage();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((res) => {
        if (!res.ok) throw new Error("网络请求失败");
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("加载失败，请重试");
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          列表
        </motion.h1>
        {loading && (
          <div className="text-center text-gray-500 py-12">加载中...</div>
        )}
        {error && (
          <div className="text-center text-red-500 py-12">{error}</div>
        )}
        {!loading && !error && (
          <div className="flex flex-col gap-4">
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow p-4 flex items-center border border-gray-100"
              >
                <span className="font-semibold text-gray-800 text-base flex-1">
                  {todo.title}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded">
                  {todo.completed ? "已完成" : "未完成"}
                </span>
                <span className="text-gray-400 text-xs ml-4">ID: {todo.id} | 用户: {todo.userId}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
