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
    img: '/image/yao.jpg',
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
    img: '/image/deren.jpg',
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
    img: '/image/jichuan.jpg',
    imgSide: 'right',
    content: [
      'AISNO combined two overpowered God-tier Catalysts into one Sinner and created Jichuan.',
      'Any shackles are really good — S0 provides high uptime 40% ATK buff, 20% Skill Damage, AND an Energy-refunding gimmick.',
    ],
    builds: [
      'S0 Jichuan Lv90 - Standard support build focusing on ATK and Skill Damage buffs.',
    ],
    synergies: 'Best paired with Yao and Lichen. Works in virtually any team that needs ATK buffs.',
  },
]