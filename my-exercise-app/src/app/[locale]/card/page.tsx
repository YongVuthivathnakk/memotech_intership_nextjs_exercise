"use client";

import Card from "@/components/card";

const cards = [
  {
    id: 1,
    title: "Neural Network",
    description:
      "A layered system of algorithms that mimics the human brain to recognize patterns and classify data.",
    tag: "AI",
    status: "Active",
    button: {
      label: "Learn More",
      onClick: () => console.log("Neural Network clicked"),
    },
  },
  {
    id: 2,
    title: "Edge Computing",
    description:
      "Processing data closer to the source rather than relying on a centralized data center.",
    tag: "Infrastructure",
    status: "Beta",
    button: {
      label: "View Docs",
      onClick: () => console.log("Edge Computing clicked"),
    },
  },
  {
    id: 3,
    title: "Zero Trust Security",
    description:
      "A security model that requires strict verification for every user and device, inside or outside the network.",
    tag: "Security",
    status: "Active",
    button: {
      label: "View Docs",
      onClick: () => console.log("Zero Trust clicked"),
    },
  },
  {
    id: 4,
    title: "Vector Database",
    description:
      "A database optimized for storing and querying high-dimensional vectors used in AI similarity search.",
    tag: "Database",
    status: "New",
    button: {
      label: "Get Started",
      onClick: () => console.log("Vector Database clicked"),
    },
  },
  {
    id: 5,
    title: "WebSockets",
    description:
      "A protocol that enables full-duplex communication between client and server over a single connection.",
    tag: "Networking",
    status: "Stable",
    button: {
      label: "Learn More",
      onClick: () => console.log("WebSockets clicked"),
    },
  },
  {
    id: 6,
    title: "Rate Limiting",
    description:
      "A technique to control the rate of requests a user can make to an API within a given time window.",
    tag: "API",
    status: "Active",
    button: {
      label: "View Docs",
      onClick: () => console.log("Rate Limiting clicked"),
    },
  },
];

export default function CardPage() {
  return (
    <div>
      <h1 className="text-2xl text-center mt-6 text-bold">Card Page</h1>

          <div className="
          
          grid grid-cols-1 gap-4 mx-6 mt-6
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      ">
        {cards.map((card) => (
          <Card
            key={card.id} {...card}
          />
        ))}
      </div>
    </div>
  );
}
