"use client";

import { useEffect, useState } from "react";

import ToolCard from "@/components/ai-tools/tool-card";

import { getAITools } from "@/lib/firestore/ai-tools";

export default function AIToolsPage() {
  const [tools, setTools] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getAITools();

      setTools(data);
    }

    load();
  }, []);

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          AI Tool Catalog
        </h1>

        <p className="text-gray-500">
          Browse all available AI tools.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
          />
        ))}

      </div>

    </div>
  );
}