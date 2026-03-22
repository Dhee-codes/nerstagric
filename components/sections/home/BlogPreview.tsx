import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "placeholder-1",
    title:
      "NerstAgric Produces Video for the 'AGRIENSEMBLE' Campaign in Ondo State",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    date: "May 20th 2020",
    image: "/images/blog/post1.jpg",
  },
  {
    slug: "placeholder-2",
    title: "Nigeria is Open for Agribusiness Investment",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    date: "May 20th 2020",
    image: "/images/blog/post2.jpg",
  },
  {
    slug: "placeholder-3",
    title: "Strengthening the Bio-tower Performance",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    date: "May 20th 2020",
    image: "/images/blog/post3.jpg",
  },
];

export const BlogPreview = () => {
  return (
    <section className="w-full px-8 sm:px-14 md:px-20 lg:px-26.25 py-16 md:py-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-text-main text-2xl md:text-3xl font-semibold">
          Blog
        </h2>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
        >
          All Blogs
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-4"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-text-main group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <span className="text-text-muted text-xs">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
