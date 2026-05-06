import heroImg from "@/assets/blog/blog3/hero.webp";
import versionImg from "@/assets/blog/blog3/version-of-yourself.webp";
import tooMuchImg from "@/assets/blog/blog3/too-much.webp";
import keepSavingImg from "@/assets/blog/blog3/keep-saving.webp";
import smallAdjImg from "@/assets/blog/blog3/small-adjustments.webp";
import secondTimeImg from "@/assets/blog/blog3/second-time.webp";
import becomesYoursImg from "@/assets/blog/blog3/becomes-yours.webp";

import b4Hero from "@/assets/blog/blog4/intro1.webp";
import b4Intro2 from "@/assets/blog/blog4/intro2.webp";
import b4_1a from "@/assets/blog/blog4/1.webp";
import b4_1b from "@/assets/blog/blog4/1.2.webp";
import b4_2a from "@/assets/blog/blog4/2.webp";
import b4_2b from "@/assets/blog/blog4/2.2.webp";
import b4_3a from "@/assets/blog/blog4/3.webp";
import b4_3b from "@/assets/blog/blog4/3.2.webp";
import b4_4a from "@/assets/blog/blog4/4.webp";
import b4_4b from "@/assets/blog/blog4/4.2.webp";
import b4_5a from "@/assets/blog/blog4/5.webp";
import b4_5b from "@/assets/blog/blog4/5.2.webp";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  image?: string;
  image2?: string;
  imageAlt?: string;
  caption?: string;
  productLink?: string;
  productLinkLabel?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  cover: string;
  date: string;
  readTime: string;
  category: string;
  intro: string[];
  sections: BlogSection[];
  outro: string[];
  signoff: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-dress-you-werent-supposed-to-wear",
    title: "The Dress You Weren't Supposed To Wear",
    subtitle: "Because the ones you hesitate about are usually the ones that work.",
    excerpt:
      "There are two kinds of dresses — the ones you buy without thinking, and the ones you pause on. This is a love letter to the second kind.",
    cover: heroImg,
    date: "April 2026",
    readTime: "4 min read",
    category: "Style Notes",
    intro: [
      "There are two kinds of dresses.",
      "The ones you buy without thinking — easy, familiar, safe. And the ones you pause on.",
      "The ones that feel slightly too bold, too fitted, too noticeable. The ones you don't immediately know how to wear, but can't stop thinking about after.",
      "Those are the ones that usually end up in your wardrobe… untouched.",
      "Not because you don't love them. But because they ask something from you — confidence, presence, a little less hesitation.",
      "And that's exactly why they matter.",
    ],
    sections: [
      {
        heading: "The One You Bought for a Version of Yourself",
        paragraphs: [
          "Some dresses aren't bought for who you are right now.",
          "They're bought for a version of you that feels slightly ahead — more confident, more decisive, less concerned with being understated.",
          "That's why they feel difficult at first. They don't match your habit. They interrupt it.",
          "But that doesn't make them wrong. It makes them unfamiliar.",
        ],
        image: versionImg,
        imageAlt: "A dress bought for a future version of yourself",
        caption: "Not your usual choice — and that's the point.",
        productLink: "/products",
      },
      {
        heading: "The One That Feels Like \"Too Much\"",
        paragraphs: [
          "There's always a moment.",
          "You try it on, look in the mirror, and immediately start adjusting your mindset instead of the dress.",
          "Is it too much? Too noticeable? Too… something?",
          "But \"too much\" is usually just unfamiliar attention. A well-cut dress doesn't overwhelm — it defines. The difference is in how you wear it.",
        ],
        image: tooMuchImg,
        imageAlt: "A bold, well-cut dress that defines the room",
        caption: "Clean, sharp, and impossible to ignore.",
        productLink: "/products",
      },
      {
        heading: "The One You Keep Saving",
        paragraphs: [
          "You tell yourself you're waiting for the right moment. A dinner, an event, a plan that feels worthy of the dress.",
          "But the moment rarely arrives in the way you expect. And the dress stays exactly where it is — in perfect condition, slightly out of reach.",
          "Not because it doesn't work. Because you haven't let it yet.",
        ],
        image: keepSavingImg,
        imageAlt: "A dress saved for the right occasion",
        caption: "Not every dress needs a reason.",
        productLink: "/products",
      },
      {
        heading: "The One That Changes With Small Adjustments",
        paragraphs: [
          "Most people think bold dresses need more styling. They don't. They need less.",
          "A strong silhouette doesn't need competition — it needs space.",
          "Minimal jewellery instead of layers. Hair left natural instead of overdone.",
          "The dress doesn't become smaller. It just becomes easier.",
        ],
        image: smallAdjImg,
        imageAlt: "A bold silhouette styled simply",
        caption: "The difference is in what you don't add.",
        productLink: "/products",
      },
      {
        heading: "The One That Works the Second Time",
        paragraphs: [
          "The first time you wear it, you're aware of it. The second time, you're not.",
          "That's when the dress stops feeling like a decision and starts feeling like something you own — fully.",
          "That's also when it becomes part of your actual wardrobe, not just something you \"have.\"",
        ],
        image: secondTimeImg,
        imageAlt: "A dress worn a second time, finally understood",
        caption: "Worn once, understood later.",
        productLink: "/products",
      },
      {
        heading: "The One That Becomes Yours",
        paragraphs: [
          "At some point, the hesitation disappears. Not because the dress changed — but because you did.",
          "You stop questioning if it's \"too much\" and start understanding why it was never meant to be subtle.",
          "And that's usually when the dress finally makes sense.",
        ],
        image: becomesYoursImg,
        imageAlt: "The moment a dress finally feels like yours",
        caption: "The moment it feels natural.",
        productLink: "/products",
      },
    ],
    outro: [
      "The dresses you hesitate about are rarely the wrong ones.",
      "They're just the ones that don't let you stay where you are.",
      "And once you wear them — properly, without overthinking — they stop feeling bold. They just feel right.",
    ],
    signoff: "Some dresses aren't made to blend in. They're made to be chosen.",
  },
  {
    slug: "what-to-wear-when-you-dont-know-what-to-wear",
    title: "What to Wear When You Don't Know What to Wear",
    subtitle: "Because the right dress makes the decision for you.",
    excerpt:
      "Some outfits take time. Others shouldn't. A guide to the dresses that remove the question entirely.",
    cover: b4Hero,
    date: "May 2026",
    readTime: "5 min read",
    category: "Style Notes",
    intro: [
      "Some outfits take time.",
      "Others shouldn't.",
      "There are days when you don't want to think through combinations or try different options. You just want something that feels right the moment you put it on — something that holds its shape, makes sense without effort, and doesn't need fixing halfway through the day.",
      "That's where the right dress comes in.",
      "Not the most complicated one. Not the most styled. Just the one that removes the question entirely.",
    ],
    sections: [
      {
        heading: "The Put-Together Option",
        paragraphs: [
          "Sometimes, the easiest solution is structure.",
          "A blazer dress works because it already feels complete. The shape is defined, the lines are clean, and there's very little you need to add to make it feel finished.",
          "Styles like Who Invited Her Blazer Dress fall into this category — strong enough to carry the look without relying on extra styling.",
          "When a piece is built this way, you don't spend time adjusting it. You just wear it.",
        ],
        image: b4_1a,
        image2: b4_1b,
        imageAlt: "A structured blazer dress",
        caption: "Structure that finishes the look on its own.",
        productLink: "/products?category=blazer-dresses",
        productLinkLabel: "Shop Blazer Dresses",
      },
      {
        heading: "The Effortless Option",
        paragraphs: [
          "There are also days when structure feels like too much.",
          "This is where simpler silhouettes matter. Dresses that follow the body naturally tend to feel easier — not because they're basic, but because they don't require constant attention.",
          "Pieces like Home-ish On Time or She — Just Enough sit in this space. They don't rely on layers or accessories to feel complete.",
          "You put them on, and they work as they are.",
        ],
        image: b4_2a,
        image2: b4_2b,
        imageAlt: "An effortless bodycon silhouette",
        caption: "Easy lines. Nothing to fix.",
        productLink: "/products?category=bodycon-dresses",
        productLinkLabel: "Shop Bodycon Dresses",
      },
      {
        heading: "The Let-It-Do-the-Work Option",
        paragraphs: [
          "Sometimes the goal isn't simplicity — it's ease with movement.",
          "Draped dresses naturally solve this. The way they fall, shape, and shift does most of the work, which means you don't need to think about styling.",
          "Dresses like Asked Anyway or Soft but Spicy feel intentional without needing effort.",
          "When a dress already carries movement and structure, adding more usually isn't necessary.",
        ],
        image: b4_3a,
        image2: b4_3b,
        imageAlt: "A draped dress with natural movement",
        caption: "Movement built into the cut.",
        productLink: "/products?category=draped-dresses",
        productLinkLabel: "Shop Draped Dresses",
      },
      {
        heading: "The Statement Option",
        paragraphs: [
          "Then there are moments when you want to look put together — without overthinking it.",
          "This is where a stronger dress comes in. Not something complicated, but something defined. A cut-out, a sharper silhouette, or a detail that holds attention on its own.",
          "Dresses like You'll Regret This or Still Went Out don't need layers or extra styling to feel complete. They already carry the look.",
          "When a piece is designed this way, everything else becomes simple.",
        ],
        image: b4_4a,
        image2: b4_4b,
        imageAlt: "A defined cut-out statement dress",
        caption: "Defined enough to stand alone.",
        productLink: "/products?category=cut-out-dresses",
        productLinkLabel: "Shop Cut-Out Dresses",
      },
      {
        heading: "The Default Option",
        paragraphs: [
          "Sometimes, the answer is simply something you trust.",
          "A black dress tends to do that. Not because it's safe, but because it's reliable. It works across different settings, moods, and levels of effort.",
          "It doesn't ask for much — and that's exactly why it works.",
          "When you don't want to second-guess anything, this is where you land.",
        ],
        image: b4_5a,
        image2: b4_5b,
        imageAlt: "A reliable black dress",
        caption: "The one you always come back to.",
        productLink: "/products?color=black",
        productLinkLabel: "Shop Black Dresses",
      },
    ],
    outro: [
      "Not every outfit needs to be built from the beginning.",
      "Some of them just need a starting point that already makes sense.",
      "And more often than not, that's the dress you don't have to think about.",
    ],
    signoff: "Some outfits don't need to be built — they just need the right starting point.",
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
