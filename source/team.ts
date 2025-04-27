export interface teamData {
  id: number;
  name: string;
  position: string;
  description: string;
  card_avatar: string;
  avatar: string;
}

const getData = (): teamData[] => {
  return [
    {
      id: 1,
      name: 'Dennis Loh',
      position: 'Managing Director',
      description: '<div>Dennis is the founder and managing director of the firm. He has an unquenchable passion for the law that has not subsided even after more than 23 years in practice. Denni\'s many years of practice has seen him argue countless cases in both the State Courts and the Supreme Court. You can rest assured that you are in good hands when you choose to tap on Denni\'s expertise. </div><br><div>Dennis graduated with honours from the University of London and is also admitted as a barrister in the United Kingdom.</div>',
      card_avatar: '/loh_card.webp',
      avatar: '/loh.webp'
    },
    {
      id: 2,
      name: 'Joel Loh',
      position: 'Associate',
      description: '<div>Joel loves tackling legal problems and coming up with innovative solutions. His main area of practice is Civil Litigation. </div><br><div>Joel graduated from Singapore Management University. His most memorable case is one where he represented a young client pro-bono for breaching the terms of his probation by committing a similar offence and managed to successfully argue for a fresh probation term to be given.</div>',
      card_avatar: '/joel_loh_card.webp',
      avatar: 'joel_loh.webp'
    },
    {
      id: 3,
      name: 'Liza Yeo',
      position: 'Conveyancing Manager',
      description: '<div>Liza is the head of the firm\'s conveyancing department. She is well loved by her clients who take to her never say die attitude and willingness to go the extra mile for her clients.</div><div>Before working at the firm, Liza was the manager at an MNC for 25 years. You can be assured that your transaction is in good hands.</div>',
      card_avatar: '/liza_yeo_card.webp',
      avatar: '/liza_yeo.webp'
    }
  ];
};

export { getData };
