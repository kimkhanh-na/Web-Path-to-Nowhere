export type GuideSection = {
  id: string
  title: string
  img: string
  imgSide: 'left' | 'right'
  content: string[]
  builds: string[]
  synergies: string
}

export const guides: GuideSection[] = [
  {
    id: 'yao',
    title: 'Yao reforge',
    img: '/image/Yao.png',
    imgSide: 'right',
    content: [
      'If you are not intending to Reforge her, then no, do not pull Yao.',
      'However if you are intending to Reforge her, then RF Yao even at S0 is extremely strong as a Magic Damage carry and highly recommended, as you essentially only need S0 Lichen and S0/S1 Jichuan for her to work well.',
      'RF Yao is insanely strong in longer fights now, and the arrival of Jichuan together with her RF just sends her damage up into the heavens.',
    ],
    builds: [
      'S0 Yao Lv90 - 2acd 3ab EX Etti 4ab - Embrace of the Dead x3. Generic build for DZ and TOA.',
      'S0 Yao Lv90 - 1ad 2ad 3a EX Etti 4ac. Build for basic attacking enemies, removes ally-killing effect of Ult.',
    ],
    synergies: "She's the engine of the Burn team — pair with Lichen and Jichuan for Burn buffs. L.L. is perfect for energy. Hestia works in mob-heavy maps, avoid pairing Hestia and Yanyan together.",
  },
  {
    id: 'deren',
    title: 'Deren reforge',
    img: '/image/Deren.png',
    imgSide: 'left',
    content: [
      'This was truly our Powercreep to Nowhere. RF Deren is re-employed as HELL and Jelena will never retire, all hail CRIT!',
      'Since the nodes do use Interference stacks, I would recommend at least S1 Deren, but S0 Deren is still playable.',
    ],
    builds: [
      'S1 Deren Lv90 - 1bc 2d 3ab EX Deren 4ab - Embrace of the Dead x3. Highest damage output build.',
      'S1 Deren Lv90 - 1cd 2d 3ab EX Deren 4ac - Embrace of the Dead. One-Punch-Woman build, lower ceiling but extremely funny.',
      'S1 Deren Lv90 - 1cd 2bd 3ab EX Deren 4ac - Melodious Belltower x3. DZ/speedrun build.',
    ],
    synergies: 'Jelena is core for CRIT team. L.L. for energy and Skill Damage. Generic Physical Damage Corebreakers like Yugu, Moore, Shin, Parfait work well.',
  },
  {
    id: 'yingying',
    title: 'Yingying guide',
    img: '/image/Yingying.png',
    imgSide: 'right',
    content: [
      'AISNO mispelled her name, which is "role compression".',
      'Most crucially, she has the unique ability to allow all other Arcane Sinners to CRIT with their abilities, completely changing the meta.',
      'This specifically is what earns her a spot in GOD tier, being "irreplaceable in her role". However, there are many options for Magic Damage now, so having Yingying to create Arcane CRIT is no longer a must.',
    ],
    builds: [
      'Yingying is complete at S0.',
      'S0/S1 she can slow, deal solid AoE damage, and hit an AoE 3 corebreak.',
      'S3 she brings a whopping 24% damage taken amp.',
      'S4 is essentially a free Cabernet ECB on all elite mobs.',
    ],
    synergies: 'Yingying enables Arcane Sinners to CRIT even at S0, opening up all your Arcane Sinners to new possibilities.',
  },
  {
    id: 'jichuan',
    title: 'Jichuan guide',
    img: '/image/Jichuan.png',
    imgSide: 'left',
    content: [
      'AISNO combined two overpowered GOD-tier Catalysts into one Sinner and created Jichuan.',
      'Any shackles are really good — Jichuan is complete at S0.',
    ],
    builds: [
      'Jichuan is complete at S0.',
      'S1 is fantastic value for one single shackle, and so early at that instead of being stuck at S3 like Margaret. Strongly recommended for everyone to aim for at least S1 Jichuan. If you are willing to learn when to use Heavenly Path and when to use Mortal Path, stopping at S1 is actually fine; S4 just makes it beyond easy to play Jichuan and get maximum returns without thinking.',
      'S3 Is alright, somewhat uncommon buff category but not unique. Also, this does not work for Normal Attack Damage-heavy teams like Shattered Blade (Augustus) or Aurum Summon.',
      'S4 is OP. It is very broken, highly recommended to save as many pulls as you can to chase this shackle. For a full explanation of why it is so OP, refer to the full Jichuan guide which contains a bunch of maths.',
      'S5 is nice to have (like, if you have S4, you might as well get S5 I guess?) and quite enjoyable to mess around with for silly DPS Jichuan clears, but not super important to have.',
    ],
    synergies: 'YAO AND XIAOFENG BOTH NEED JICHUAN, SO PULL HER FIRST BEFORE PULLING THEM!!!!!!',
  },
  {
    id: 'xiaofeng',
    title: 'Xiaofeng guide',
    img: '/image/Xiaofeng.png',
    imgSide: 'right',
    content: [
      'Xiaofeng is a Physical Main DPS who uses the Overlimit Potestas.',
      'Occupying a similar position to Vautour Bleu, her performance at low shackles is passable, while at S4 her damage ceiling is meta-breakingly high.',
      'However, this does require investment in a full S-Rank team at high shackles, and thus she is not recommended for casual or F2P players.',
    ],
    builds: [
      "S0 Xiaofeng is technically complete, but feels quite bad to play in practice due to most stages making it so you barely scrape up enough Chief Energy with Rust and Jichuan working overtime. ",
      "S1 makes it free to summon her first two tigers, greatly relieving this energy problem, so it's recommend most players to go for that. ",
      "S3 and S4 respectively are pretty big (and important) damage spikes, as otherwise you'd need a fairly stacked team to support her at low shackles, strong gameplay knowledge, and a willingness to babysit the Overlimit meter in stages lacking cores.",
    ],
    synergies: "S0 Xiaofeng really needs Rust as a crutch, but S3 doesn't. Clementine is an excellent fit into Xiaofeng's team in particular.",
  },
]