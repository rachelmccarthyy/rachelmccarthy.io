import PageShell from "@/components/PageShell";

const thoughts = [
  {
    title: "Function of Design vs. Design of Function",
    date: "Mar 2025",
    tag: "Design · Product",
    body: "I keep coming back to a distinction I can't quite name cleanly, but I feel it every time I make a product or design decision. There's the function of design — when the way something looks or is arranged actively does something. A made bed isn't decoration; it's the first act of ordering your day. A rug anchors a room and changes how you move through it. The design is the function. Then there's the design of function — when a functional requirement shapes what something looks like. You need closed storage so surfaces stay clear, and the room ends up looking minimal as a byproduct. The function is driving the design. Most people collapse these into \"form follows function\" and move on. But I think they're genuinely different modes of thinking, and the best products live in both simultaneously. A well-designed app isn't just usable and also pretty — the visual choices are doing work (hierarchy, focus, calm), and the functional constraints are producing the aesthetic (simplicity born from scope discipline, not decoration). I don't have a clean thesis here yet. But I notice it constantly — in rooms, in products, in the way people dress. Sometimes the design is serving the function. Sometimes the function is producing the design. And the magic is when you can't tell which one came first.",
  },
  {
    title: "Alyssa Liu and Loving the Process",
    date: "Feb 2026",
    tag: "Philosophy",
    body: "There's a concept in the Bhagavad Gita (nishkama karma) that translates roughly to \"action without attachment to outcome.\" You do the work because the work is worth doing, not because you're chasing a specific result. Stanford researchers Huang and Aaker found the same thing empirically: people who frame their goals as journeys rather than destinations show significantly more growth and sustained effort after reaching them. The metaphor changes the relationship to the work itself. Alyssa Liu puts it better than any paper could. After falling at the Olympics, she told NBC: \"A bad story is still a story, and I think that's beautiful. There's no way to lose.\" And later: \"I love struggling, actually. It makes me feel alive. I really did learn detachment.\" That's not naive optimism; it's a framework. If the goal is expression rather than perfection, every attempt adds to the body of work. The stumbles become part of the narrative rather than disqualifying moments. Detach from the scoreboard and the score tends to take care of itself.",
    sources: [
      { label: "Huang & Aaker, Stanford GSB", url: "https://www.gsb.stanford.edu/faculty-research/publications/its-journey-not-destination-how-metaphor-drives-growth-after-goal" },
      { label: "Alyssa Liu", url: "https://www.instagram.com/reel/DVDDDX0iviz/" },
    ],
  },
  {
    title: "The End of the Front End",
    date: "Feb 2026",
    tag: "Product · AI",
    body: "Before the internet, there was no front end. You called a travel agent, told them where you wanted to go, and they handled it. You walked into a bank and a person processed your transaction. The interface was a human. Then the web happened, and suddenly the front end was the product. Companies spent two decades perfecting pixels, optimizing funnels, A/B testing button colors. The screen became everything. Now we're watching that era close. AI agents are starting to handle tasks end-to-end — booking flights, filing expenses, managing workflows — with back-end logic and APIs doing the real work. The \"product\" stops being a screen you design and starts being a system you orchestrate. It's a return to form. We're going back to the travel agent model, except the agent is software. But here's what makes it harder this time: trust. When you handed your trip to a human travel agent, trust was built through conversation, reputation, eye contact. You could read their confidence, push back in real time, catch a mistake before it was made. With an AI agent, all of that disappears. The user can't see what's happening. They don't know what the agent considered, what it ruled out, or why it chose what it chose. So the product problem shifts from \"how do we make this easy to use\" to \"how do we make this easy to trust.\" That means solving for transparency — showing your work without overwhelming the user. It means giving people the right amount of control: enough to feel safe, not so much that you've just rebuilt a front end with extra steps. And it means earning trust incrementally, the same way a good human agent would — by being right often enough that the user stops checking. For PMs, this is the new design challenge. The best products of the next decade might be ones you never actually look at — just like the best products of the 1980s were. The difference is that back then, you trusted a person. Now you have to build that same trust into software.",
  },
  {
    title: "Lemons, Cars, and the NYC Marriage Market",
    date: "Jul 2025",
    tag: "Economics",
    body: "Akerlof's \"Market for Lemons\" showed that when one party knows more than the other, markets can unravel. Sellers of used cars know if their car is a lemon; buyers can't tell, so they only pay average-quality prices, which drives good sellers out until only lemons remain. It earned him the Nobel Prize, and it maps onto NYC dating with uncomfortable precision. When you meet someone, they know far more about their quality as a partner — attachment style, baggage, intentions — than you do. You're the buyer assessing a used car by its paint job. And the adverse selection is real: emotionally healthy, relationship-ready people get snapped up quickly and exit the market, shifting the pool's composition over time. NYC amplifies everything. The paradox of choice keeps even good partners cycling in and out. Career-driven New Yorkers rely on noisy proxies — job, neighborhood, appearance — because they don't have time for the slow reveal of private information. The \"grass is greener\" dynamic functions like a refusal to pay fair price: if everyone assumes they deserve above-average quality but won't offer vulnerability, commitment, or patience in return, good matches never get made. The real-world warranties are interesting though. Mutual friends act like dealer reputations. Dating apps with friction signal seriousness. Long courtships are extended inspections. Social proof functions like a CarFax report — it doesn't guarantee quality, but it reduces uncertainty. The irony is that in a city of 8 million people, the sheer volume of options makes the information problem worse, not better. Widespread distrust leads people to underinvest in dating or exit the market entirely. Individually rational. Collectively suboptimal. There are good matches that never get made because the information problem is too severe.",
    sources: [
      { label: "Akerlof, \"The Market for Lemons\" (1970)", url: "https://personal.utdallas.edu/~nina.baranchuk/Fin7310/papers/Akerlof1970.pdf" },
    ],
  },
  {
    title: "Jobs to Be Done, Actually",
    date: "Apr 2025",
    tag: "Product · Strategy",
    body: "Everyone references Clayton Christensen's Jobs to Be Done framework. Almost no one applies it well day-to-day. The idea is simple: people don't buy products, they hire them to make progress in their lives. But in practice, most teams skip straight to solutions without ever articulating the job. Here's how I actually use it: start with the moment of struggle, not the user persona. \"I'm standing in the kitchen at 6pm with no plan for dinner\" is a job. \"Millennial food enthusiast\" is a demographic. One leads to a product that solves a real problem; the other leads to a mood board. When you write the job statement clearly — situation, motivation, desired outcome — the feature debates get simpler, because you have something concrete to evaluate against.",
  },
  {
    title: "Interior Design is Product Design",
    date: "Oct 2025",
    tag: "Design · UX",
    body: "Interior design is user experience for physical space. The best rooms work the way the best products do — they shape how you feel and behave without announcing themselves. I've been thinking about this a lot lately through small, concrete decisions: hiding every wire because visible clutter is cognitive load. Closed storage always, because when surfaces are clear your brain stays clear too. Rugs, because a good one anchors a room and can completely change the energy of a space without touching a wall. Making your bed every morning — not because anyone sees it, but because it's the first completed task of the day and it sets the tone. I've been loving the European tuck: draping the coverlet over your pillows and tucking it just under the base so the bed reads as one clean surface. It takes ten seconds and the room immediately feels intentional. None of this is about aesthetics for aesthetics' sake. It's about designing your environment the way you'd design a product — every decision in service of how the person using it actually feels.",
  },
];

export default function ThinkingPage() {
  return (
    <PageShell title="Thinking" subtitle="I'm thinking thoughts.">
      <div className="divide-y divide-border">
        {thoughts.map((thought) => (
          <div key={thought.title} className="py-8 first:pt-0">
            <div className="flex items-baseline gap-3 text-[10px] uppercase tracking-[0.08em] text-fg/50 font-normal mb-2">
              <span>{thought.tag}</span>
              <span>·</span>
              <span>{thought.date}</span>
            </div>
            <h2 className="text-lg font-semibold text-fg mb-3">{thought.title}</h2>
            <p className="text-sm text-fg/70 leading-relaxed font-normal">{thought.body}</p>
            {thought.sources && thought.sources.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {thought.sources.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#FFE033] hover:underline"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
