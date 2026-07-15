import Image from "next/image";

const stories = [
  {
    eyebrow: "Khởi nguồn",
    title: <>Câu chuyện bắt đầu từ miền đất hứa</>,
    description: "Nơi bắt đầu từ những người đến trước — những người nhìn thấy tiềm năng của một trung tâm tài chính quốc tế trước khi đường chân trời kịp đổi màu.",
    image: "/stories/stories-1.jpg",
    imageAlt: "Những người tiên phong tiến về thành phố tương lai",
  },
  {
    eyebrow: "Tầm nhìn",
    title: <>IFC không phải tòa nhà —<br /><em className="italic">là cỗ máy hút vốn</em></>,
    description: "Trung tâm tài chính quốc tế mở ra một ngôn ngữ mới cho dòng vốn, công nghệ và những ý tưởng có khả năng định hình tương lai. Một hệ sinh thái được kiến tạo để kết nối Việt Nam với thế giới.",
    image: "/stories/stories-2.jpg",
    imageAlt: "Những người đến trước trên hành trình kiến tạo miền đất hứa",
  },
  {
    eyebrow: "Cơ hội",
    title: <>Khi VIFC vừa mở cửa —<br /><em className="italic">ai ngồi trước, thắng.</em></>,
    description: "Cơ hội không chờ đợi. Những tổ chức tiên phong sẽ là người đặt nền móng, tạo ra tiêu chuẩn và sở hữu lợi thế trong một thị trường đang chuyển mình mạnh mẽ.",
    image: "/stories/stories-3.jpg",
    imageAlt: "Toàn cảnh trung tâm tài chính quốc tế tại Thành phố Hồ Chí Minh",
  },
];

export default function StoriesStackSection() {
  return (
    <section className="relative bg-[#f1ede3] text-[#17130d]">
      <header className="border-b border-black/10 px-6 py-8 md:px-10 md:py-10">
        <p className="font-instrument text-center text-2xl font-bold uppercase tracking-wide text-[#9b6b20] md:whitespace-nowrap md:text-4xl">The Long Game: Dispatches from Inside VIFC</p>
      </header>

      <div>
        {stories.map((story, index) => (
          <article
            key={story.eyebrow}
            className="sticky top-0 grid min-h-[78vh] grid-cols-1 overflow-hidden border-b border-black/10 bg-[#f1ede3] shadow-[0_-18px_40px_rgba(0,0,0,0.08)] md:grid-cols-2"
            style={{ zIndex: index + 1 }}
          >
            <div className="flex min-h-[42vh] flex-col justify-between p-6 md:min-h-0 md:p-10 lg:p-14">
              <div className="flex items-center justify-between border-b border-black/10 pb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">{story.eyebrow}</p>
                <p className="font-instrument text-lg italic text-[#9b6b20]">0{index + 1}</p>
              </div>

              <div className="my-auto max-w-xl py-12">
                <h2 className="font-instrument text-4xl leading-[1.02] tracking-tight text-[#9b6b20] md:text-5xl lg:text-6xl">{story.title}</h2>
                <p className="mt-7 max-w-lg text-sm leading-7 text-black/55 md:text-base">{story.description}</p>
              </div>

              <p className="text-[10px] uppercase tracking-[0.18em] text-black/35">VIFC HCMC · Sáng Đèn 2026</p>
            </div>

            <div className="relative min-h-[36vh] overflow-hidden bg-black md:min-h-0">
              <Image src={story.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="scale-110 object-cover object-center opacity-45 blur-xl" aria-hidden="true" />
              <Image src={story.image} alt={story.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
              <div className="absolute inset-x-8 bottom-8 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/65 md:inset-x-10">
                <span>GOE Alliance</span><span>Scroll to explore</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
