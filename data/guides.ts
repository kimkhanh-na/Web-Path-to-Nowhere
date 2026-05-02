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
    id: 'jichuan',
    title: 'Jichuan guide',
    img: '/image/Jichuan.png',
    imgSide: 'right',
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
]