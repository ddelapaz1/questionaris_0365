// Generat amb tools/moodle2quiz.py — no editar a mà.
window.QUIZ = {
 "id": "t1-2-modulacio",
 "title": "T1.2 Modulacions i desmodulacions",
 "questions": [
  {
   "type": "multichoice",
   "text": "Per què no es pot transmetre directament per una antena un senyal d'àudio en banda base (20 Hz – 20 kHz)?",
   "explanation": "A freqüències tan baixes la longitud d'ona és enorme (15.000 km a 20 Hz) i l'antena hauria de tenir unes dimensions comparables, cosa impracticable. A més, tots els senyals ocuparien les mateixes freqüències i s'interferirien.",
   "options": [
    "Perquè la longitud d'ona seria enorme i l'antena, impracticable.",
    "Perquè les antenes només poden radiar senyals digitals codificats.",
    "Perquè l'àudio té una freqüència massa alta per a qualsevol antena.",
    "Perquè un senyal d'àudio no es pot amplificar fins a prou potència.",
    "Perquè els senyals de banda base no tenen longitud d'ona."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Les antenes radien senyals analògics sense cap problema: el problema és la freqüència, no el tipus de senyal.",
    "És al revés: l'àudio té una freqüència massa baixa.",
    "Un senyal d'àudio es pot amplificar; això no és el que impedeix radiar-lo.",
    "Tot senyal periòdic té longitud d'ona (λ = c/f); en banda base és molt gran."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és la modulació?",
   "explanation": "La modulació és el procés de modificar una o més característiques d'una ona portadora d'alta freqüència segons el senyal d'informació (modulador) que es vol transmetre.",
   "options": [
    "Variar una característica d'una portadora segons el senyal d'informació.",
    "El procés d'extreure el senyal d'informació del senyal rebut al receptor.",
    "El procés d'amplificar el senyal d'àudio abans de l'antena.",
    "El procés de convertir un senyal digital en analògic.",
    "El procés de filtrar el soroll del canal de transmissió."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és la desmodulació, el procés invers.",
    "Amplificar no canvia cap característica de la portadora segons la informació.",
    "Això és una conversió D/A; la modulació treballa sobre una portadora.",
    "El filtratge no és modulació."
   ]
  },
  {
   "type": "multichoice",
   "text": "En el procés de modulació, què és el senyal portador?",
   "explanation": "El senyal portador és una ona sinusoidal d'alta freqüència que fa de vehicle per transportar la informació. El senyal modulador és la informació (veu, dades, vídeo...).",
   "options": [
    "Una ona sinusoidal d'alta freqüència que transporta la informació.",
    "El senyal d'informació (veu, dades, vídeo) que volem transmetre.",
    "El senyal de baixa freqüència que surt del desmodulador.",
    "El soroll que s'afegeix al canal de transmissió.",
    "L'oscil·lador local del receptor superheterodí."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Aquest és el senyal modulador.",
    "Aquest és el senyal recuperat, no la portadora.",
    "El soroll no és cap senyal útil del procés.",
    "L'oscil·lador local és un element del receptor, no la portadora del transmissor."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és l'objectiu principal de la desmodulació?",
   "explanation": "La desmodulació es fa al receptor i recupera el senyal d'informació (banda base) a partir del senyal modulat rebut, eliminant la portadora.",
   "options": [
    "Recuperar el senyal d'informació original a partir del senyal modulat rebut.",
    "Traslladar el senyal d'informació a una freqüència més alta.",
    "Augmentar la potència de la portadora abans de transmetre.",
    "Generar la portadora d'alta freqüència.",
    "Combinar diversos senyals en un mateix canal."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és el que fa la modulació, al transmissor.",
    "Això ho fa l'amplificador de potència del transmissor.",
    "La portadora la genera l'oscil·lador del transmissor.",
    "Això és la multiplexació."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina tècnica de desmodulació s'utilitza habitualment per a la modulació AM?",
   "explanation": "Cada modulació té el seu desmodulador: detectors d'envolupant per a AM, discriminadors de freqüència per a FM, detectors de fase per a PM i desmoduladors coherents o no coherents per a les modulacions digitals.",
   "options": [
    "El detector d'envolupant.",
    "El discriminador de freqüència.",
    "El detector de fase.",
    "El codificador PCM.",
    "El mesclador amb l'oscil·lador local."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El discriminador de freqüència s'utilitza per a FM.",
    "El detector de fase s'utilitza per a PM.",
    "PCM és una codificació digital, no un desmodulador AM.",
    "El mesclador converteix a FI al superheterodí, però no extreu l'envolupant."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina tècnica de desmodulació s'utilitza habitualment per a la modulació FM?",
   "explanation": "Per a FM s'utilitzen discriminadors de freqüència, que converteixen les variacions de freqüència en variacions de tensió.",
   "options": [
    "El discriminador de freqüència.",
    "El detector d'envolupant.",
    "El detector de fase.",
    "El filtre anti-aliàsing.",
    "El quantificador."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El detector d'envolupant és per a AM; en FM l'amplitud és constant.",
    "El detector de fase és per a PM.",
    "El filtre anti-aliàsing s'utilitza en la digitalització.",
    "La quantificació és part de la conversió A/D."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina característica de la portadora es varia en la modulació FM i quina es manté constant?",
   "explanation": "En FM es varia la freqüència de la portadora segons el senyal d'informació i l'amplitud es manté constant. En AM és al revés.",
   "options": [
    "Es varia la freqüència i es manté constant l'amplitud.",
    "Es varia l'amplitud i es manté constant la freqüència.",
    "Es varien l'amplitud i la freqüència alhora.",
    "Es varia la fase i es manté constant la freqüència.",
    "Es varia el nombre de bits per símbol."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és la modulació AM.",
    "En FM ideal l'amplitud es manté constant.",
    "Això correspon a la PM.",
    "Això és propi de les modulacions digitals multinivell."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació digital fa servir múltiples subportadores ortogonals i s'utilitza a la TDT europea (DVB-T)?",
   "explanation": "La COFDM (Coded Orthogonal FDM) reparteix les dades en moltes subportadores ortogonals. És la modulació de la TDT europea (DVB-T).",
   "options": [
    "COFDM",
    "QPSK",
    "ASK",
    "FSK",
    "AM"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "QPSK s'utilitza a la TV per satèl·lit (DVB-S).",
    "ASK s'utilitza en sistemes senzills.",
    "FSK s'utilitza en mòdems i transmissions de dades senzilles.",
    "AM és una modulació analògica, no digital."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin avantatge general tenen les modulacions digitals respecte de les analògiques?",
   "explanation": "Les modulacions digitals permeten transmetre més informació amb menys ample de banda i són més resistents als errors (es poden detectar i corregir).",
   "options": [
    "Transmeten més informació amb menys ample de banda i són més resistents als errors.",
    "No necessiten cap portadora i, per tant, simplifiquen el transmissor.",
    "Són més senzilles i barates d'implementar que qualsevol modulació analògica.",
    "No es veuen mai afectades pel soroll ni per les interferències del canal.",
    "Ocupen sempre el doble d'ample de banda que el senyal original, com l'AM."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Les modulacions digitals també modulen una portadora.",
    "En general són més complexes que l'AM.",
    "El soroll les afecta, però són més robustes i permeten corregir errors.",
    "Aquesta és una característica de l'AM."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada mode de comunicació amb la seva descripció.",
   "explanation": "Simplex: un sol sentit. Half duplex: dos sentits, però per torns. Full duplex: dos sentits alhora.",
   "pairs": [
    [
     "Simplex",
     "Un sol sentit: un equip transmet i l'altre només rep"
    ],
    [
     "Half duplex",
     "Dos sentits, però no alhora (per torns)"
    ],
    [
     "Full duplex",
     "Dos sentits simultàniament"
    ]
   ],
   "distractors": [
    "Diversos sentits sense cap ordre establert"
   ]
  },
  {
   "type": "multichoice",
   "text": "Un walkie-talkie en què cal prémer un botó per parlar (PTT) i esperar el torn és un exemple de comunicació…",
   "explanation": "En half duplex la comunicació és bidireccional però no simultània: primer transmet un equip i després l'altre. Exemples: walkie-talkie, ràdio policial, sistemes PTT.",
   "options": [
    "half duplex.",
    "simplex.",
    "full duplex.",
    "multiplexada en freqüència.",
    "coherent."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En simplex només hi ha un sentit; amb el walkie-talkie tots dos poden parlar.",
    "En full duplex es pot parlar alhora, sense torns.",
    "La multiplexació no és un mode de sentit de transmissió.",
    "«Coherent» es refereix a un tipus de desmodulació, no al sentit de la comunicació."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin d'aquests és un exemple de comunicació simplex?",
   "explanation": "En simplex la comunicació és unidireccional: l'emissor transmet i el receptor només rep. Exemples: ràdio FM, televisió.",
   "options": [
    "La radiodifusió FM.",
    "Una trucada de telefonia mòbil.",
    "Una videotrucada.",
    "Una conversa amb walkie-talkie.",
    "Un sistema de ràdio policial PTT."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La telefonia és full duplex.",
    "Una videotrucada és full duplex.",
    "El walkie-talkie és half duplex.",
    "Els sistemes PTT són half duplex."
   ]
  },
  {
   "type": "multichoice",
   "text": "En la modulació AM, què representa l'envolupant del senyal modulat?",
   "explanation": "L'amplitud de la portadora varia proporcionalment al senyal modulador, de manera que l'envolupant segueix la forma del senyal d'informació.",
   "options": [
    "La forma del senyal d'informació (modulador).",
    "La freqüència de la portadora.",
    "El soroll afegit pel canal.",
    "La fase de la portadora.",
    "La freqüència intermèdia del receptor."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La freqüència de la portadora és la de les oscil·lacions ràpides, no l'envolupant.",
    "L'envolupant porta la informació, no el soroll.",
    "En AM la fase no es fa servir per portar informació.",
    "La FI és una freqüència interna del receptor."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina relació hi ha entre l'ample de banda d'un senyal AM i el del senyal modulador?",
   "explanation": "Un senyal AM (doble banda lateral) ocupa el doble de l'ample de banda del senyal modulador, perquè genera una banda lateral a cada costat de la portadora.",
   "options": [
    "El senyal AM ocupa el doble, perquè té una banda lateral a cada costat de la portadora.",
    "El senyal AM ocupa el mateix, perquè només canvia l'amplitud de la portadora.",
    "El senyal AM ocupa la meitat, perquè la portadora concentra gran part de la potència.",
    "El senyal AM ocupa infinites bandes laterals, com passa també en FM.",
    "El senyal AM ocupa sempre 200 kHz, independentment del senyal modulador."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'AM genera dues bandes laterals, una a cada costat de la portadora.",
    "Que la portadora tingui molta potència no redueix l'ample de banda.",
    "Les infinites bandes laterals són pròpies de la FM.",
    "200 kHz és el canal de la FM comercial."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quines són les bandes laterals que genera la modulació AM?",
   "explanation": "L'AM genera dues bandes laterals, la superior (USB) i la inferior (LSB), que són imatges especulars del senyal d'informació a banda i banda de la portadora.",
   "options": [
    "Una banda lateral superior (USB) i una d'inferior (LSB).",
    "Infinites bandes laterals, com en FM.",
    "Una sola banda lateral, sempre per sobre de la portadora.",
    "Cap: tota la potència queda a la portadora.",
    "Les bandes I i Q."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Les infinites bandes laterals (funcions de Bessel) són pròpies de la FM.",
    "L'AM convencional genera dues bandes laterals.",
    "La major part de la potència és a la portadora, però hi ha dues bandes laterals.",
    "I i Q són les components d'una constel·lació digital."
   ]
  },
  {
   "type": "multichoice",
   "text": "Per què es diu que l'AM té una eficiència energètica baixa?",
   "explanation": "La major part de la potència es concentra en la portadora, que no transporta informació útil. La informació viatja a les bandes laterals.",
   "options": [
    "Perquè gran part de la potència va a la portadora, que no porta informació.",
    "Perquè ocupa infinites bandes laterals que malbaraten la potència.",
    "Perquè el detector d'envolupant del receptor consumeix molta potència.",
    "Perquè la freqüència de la portadora és massa baixa per radiar bé.",
    "Perquè el senyal modulat no es pot amplificar sense distorsió."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és propi de la FM.",
    "L'eficiència es refereix a la potència transmesa, no al receptor.",
    "L'eficiència energètica no depèn d'això.",
    "El senyal AM s'amplifica sense problemes."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada variant de l'AM amb la seva característica.",
   "explanation": "DSB: dues bandes laterals. SSB: elimina la portadora i una banda lateral. VSB: portadora + una banda completa + un vestigi de l'altra (TV analògica). SC-AM: elimina només la portadora.",
   "pairs": [
    [
     "DSB",
     "Utilitza les dues bandes laterals"
    ],
    [
     "SSB",
     "Elimina la portadora i una de les bandes laterals"
    ],
    [
     "VSB",
     "Manté una banda completa i un vestigi de l'altra (TV analògica)"
    ],
    [
     "SC-AM",
     "Elimina només la portadora"
    ]
   ],
   "distractors": [
    "Varia la freqüència de la portadora"
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina variant de l'AM elimina la portadora i una de les bandes laterals, i redueix l'ample de banda i la potència necessària?",
   "explanation": "La SSB (banda lateral única) elimina la portadora i una banda lateral, cosa que millora l'eficiència energètica i redueix l'ample de banda.",
   "options": [
    "SSB (banda lateral única)",
    "DSB (doble banda lateral)",
    "VSB (banda lateral vestigial)",
    "SC-AM (portadora suprimida)",
    "FM de banda estreta"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La DSB utilitza les dues bandes laterals.",
    "La VSB manté la portadora i un vestigi de l'altra banda.",
    "La SC-AM elimina la portadora, però manté les dues bandes.",
    "No és una variant de l'AM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és el marge de freqüències de la radiodifusió AM a Europa?",
   "explanation": "A Europa la radiodifusió AM ocupa de 531 a 1602 kHz (a Amèrica del Nord, de 530 a 1700 kHz).",
   "options": [
    "531–1602 kHz",
    "87,5–108 MHz",
    "118–137 MHz",
    "530–1700 MHz",
    "455–1455 kHz"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Aquesta és la banda de radiodifusió FM.",
    "Aquesta és la banda aeronàutica.",
    "Les unitats són kHz, no MHz.",
    "455 kHz és la FI típica d'un receptor AM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és un avantatge de la modulació AM?",
   "explanation": "Avantatges de l'AM: simplicitat tècnica de transmissors i receptors (fins i tot receptors de galena), i gran abast per ona de terra i ionosfèrica.",
   "options": [
    "La simplicitat tècnica de transmissors i receptors.",
    "La gran immunitat al soroll atmosfèric i a les interferències.",
    "Una qualitat d'àudio superior a la de la FM.",
    "Una eficiència energètica alta, perquè la portadora gasta poca potència.",
    "Un ample de banda menor que el de la SSB."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'AM és molt susceptible al soroll, especialment atmosfèric.",
    "La qualitat d'àudio és limitada.",
    "La major part de la potència va a la portadora.",
    "La SSB ocupa la meitat que l'AM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina és la idea clau d'un receptor superheterodí?",
   "explanation": "El superheterodí converteix qualsevol freqüència rebuda en una freqüència intermèdia (FI) fixa, on es filtra i s'amplifica abans de desmodular.",
   "options": [
    "Convertir qualsevol emissora sintonitzada en una freqüència intermèdia (FI) fixa.",
    "Amplificar i filtrar cada emissora directament a la seva freqüència.",
    "Eliminar la portadora abans de transmetre.",
    "Convertir el senyal analògic en digital.",
    "Variar el filtre de FI per a cada emissora."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és el que fa un receptor simple.",
    "Això és propi de les variants SSB/SC-AM al transmissor.",
    "Això és la conversió A/D.",
    "Precisament el filtre de FI és fix."
   ]
  },
  {
   "type": "multichoice",
   "text": "En un receptor superheterodí, què fa l'oscil·lador local quan canviem d'emissora?",
   "explanation": "En sintonitzar una altra emissora, l'oscil·lador local canvia de freqüència de manera que la diferència |fOL − fRF| sigui sempre igual a la FI (per exemple, 455 kHz).",
   "options": [
    "Canvia de freqüència perquè la diferència amb l'emissora sigui sempre la FI.",
    "Es manté fix i el que canvia és la freqüència intermèdia de cada emissora.",
    "S'atura, perquè només es fa servir mentre s'encén el receptor.",
    "Canvia l'amplitud de la portadora rebuda per adaptar-la a l'altaveu.",
    "Genera directament el senyal d'àudio de la nova emissora."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És al revés: la FI és fixa i l'oscil·lador local és el que canvia.",
    "L'oscil·lador local treballa contínuament i alimenta el mesclador.",
    "L'oscil·lador local no actua sobre l'amplitud del senyal rebut.",
    "L'àudio s'obté al desmodulador, després de la FI."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina és la principal millora del superheterodí respecte d'un receptor AM simple?",
   "explanation": "La principal millora és la selectivitat: el filtre de FI és fix i es pot dissenyar amb una resposta molt precisa per separar emissores pròximes.",
   "options": [
    "Una selectivitat molt més gran, gràcies a un filtre de FI fix i optimitzat.",
    "Una arquitectura més senzilla, amb menys etapes que un receptor simple.",
    "Que no necessita oscil·lador local per sintonitzar les emissores.",
    "Que no necessita desmodulador, perquè la FI ja és àudio.",
    "Que redueix l'ample de banda del senyal que transmet l'emissora."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "El superheterodí és més complex que un receptor simple.",
    "L'oscil·lador local és imprescindible al superheterodí.",
    "Després de la FI cal desmodular igualment.",
    "El receptor no canvia l'ample de banda del senyal emès."
   ]
  },
  {
   "type": "matching",
   "text": "Ordena les etapes d'un receptor AM superheterodí, des de l'antena fins a l'altaveu.",
   "explanation": "Antena → filtre/amplificador RF → mesclador (amb l'oscil·lador local) → FI → desmodulador AM → amplificador d'àudio → altaveu.",
   "ordering": true,
   "pairs": [
    [
     "Antena",
     "1"
    ],
    [
     "Filtre / amplificador RF",
     "2"
    ],
    [
     "Mesclador",
     "3"
    ],
    [
     "Filtre i amplificador de FI",
     "4"
    ],
    [
     "Desmodulador AM",
     "5"
    ],
    [
     "Amplificador d'àudio",
     "6"
    ],
    [
     "Altaveu",
     "7"
    ]
   ],
   "distractors": []
  },
  {
   "type": "multichoice",
   "text": "Al receptor superheterodí, quin element entra al mesclador juntament amb el senyal de RF?",
   "explanation": "Al mesclador hi arriben el senyal de RF i el de l'oscil·lador local. A la sortida apareix, entre altres, la diferència |fOL − fRF| = FI.",
   "options": [
    "El senyal de l'oscil·lador local.",
    "El senyal d'àudio de sortida.",
    "La sortida del desmodulador.",
    "El senyal de l'altaveu.",
    "Un senyal de rellotge digital."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'àudio s'obté al final, després del desmodulador.",
    "El desmodulador és posterior a la FI.",
    "L'altaveu és l'última etapa.",
    "El superheterodí analògic fa servir un oscil·lador local sinusoidal."
   ]
  },
  {
   "type": "multichoice",
   "text": "En FM, segons Δf = kf · Am, què passa amb la desviació màxima de freqüència si dupliquem l'amplitud de la moduladora?",
   "explanation": "La desviació és proporcional a l'amplitud de la moduladora: si es dobla Am, es dobla Δf.",
   "options": [
    "Es duplica.",
    "Es manté igual.",
    "Es redueix a la meitat.",
    "Es quadruplica.",
    "Es duplica l'amplitud del senyal modulat."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Δf depèn directament de Am.",
    "La relació és directament proporcional, no inversa.",
    "La relació és lineal, no quadràtica.",
    "En FM l'amplitud del senyal modulat es manté constant."
   ]
  },
  {
   "type": "multichoice",
   "text": "En FM, què determina la freqüència del senyal modulador?",
   "explanation": "L'amplitud de la moduladora determina quant s'allunya la freqüència instantània (Δf); la freqüència de la moduladora determina com de ràpid es repeteixen aquestes variacions.",
   "options": [
    "Com de ràpid es repeteixen les variacions de freqüència de la portadora.",
    "Quant s'allunya la freqüència instantània del valor central.",
    "L'amplitud del senyal modulat.",
    "La freqüència central de la portadora.",
    "La potència de la portadora."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això ho determina l'amplitud de la moduladora.",
    "En FM ideal l'amplitud és constant.",
    "La portadora la fixa el transmissor.",
    "La freqüència moduladora no afecta la potència."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina és la desviació de freqüència típica de la radiodifusió FM comercial?",
   "explanation": "En la radiodifusió FM comercial la desviació màxima és de ±75 kHz.",
   "options": [
    "±75 kHz",
    "±15 kHz",
    "±200 kHz",
    "±455 kHz",
    "±5 kHz"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "15 kHz és la freqüència màxima d'àudio.",
    "200 kHz és l'amplada del canal.",
    "455 kHz és la FI típica dels receptors AM.",
    "Massa petita per a la radiodifusió comercial."
   ]
  },
  {
   "type": "multichoice",
   "text": "Per què la FM és més resistent al soroll que l'AM?",
   "explanation": "El soroll afecta principalment l'amplitud del senyal. En FM la informació està en la freqüència, de manera que el receptor pot ignorar les variacions d'amplitud.",
   "options": [
    "Perquè el soroll afecta sobretot l'amplitud, i en FM la informació va en la freqüència.",
    "Perquè la FM ocupa menys ample de banda i, per tant, capta menys soroll.",
    "Perquè la FM transmet molta més potència a la portadora que l'AM.",
    "Perquè la FM no té bandes laterals on es pugui afegir soroll.",
    "Perquè la FM treballa a freqüències on no hi ha cap mena de soroll."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La FM ocupa molt més ample de banda que l'AM.",
    "La robustesa no ve de la potència.",
    "La FM té infinites bandes laterals.",
    "A totes les freqüències hi ha soroll."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és l'efecte captura en FM?",
   "explanation": "Quan hi ha diversos senyals FM a la mateixa freqüència, el receptor tendeix a «capturar» el més fort i a suprimir els més febles.",
   "options": [
    "El receptor es queda amb el senyal més fort i suprimeix els més febles.",
    "La conversió de l'emissora sintonitzada a una FI fixa.",
    "La pèrdua de l'envolupant quan el senyal està sobremodulat.",
    "L'aparició d'aliàsing quan es mostreja massa lentament.",
    "El receptor suma els senyals de tots els emissors de la freqüència."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és el principi del superheterodí.",
    "Això és un fenomen d'AM.",
    "L'aliàsing és un fenomen de la digitalització.",
    "És al revés: se'n queda només un, el més fort."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin tipus de modulació mostra aquest senyal?",
   "explanation": "L'amplitud és constant, però les oscil·lacions es comprimeixen i s'expandeixen de forma contínua: la freqüència instantània varia amb el senyal modulador. És FM.",
   "image": "../img/t1-2-modulacio/fm_1.png",
   "options": [
    "FM (modulació de freqüència)",
    "AM (modulació d'amplitud)",
    "ASK",
    "FSK",
    "Portadora sense modular"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En AM l'amplitud varia; aquí és constant.",
    "En ASK l'amplitud canvia per trams; aquí és constant.",
    "En FSK hi hauria només dues freqüències amb salts bruscos; aquí la freqüència varia de forma contínua.",
    "Una portadora sense modular tindria una freqüència fixa."
   ]
  },
  {
   "type": "multichoice",
   "text": "Aquest senyal s'ha obtingut modulant una portadora amb un senyal d'àudio. Quina modulació s'ha utilitzat?",
   "explanation": "L'envolupant (contorn superior i inferior) reprodueix la forma del senyal d'àudio i la freqüència de la portadora és constant: és AM.",
   "image": "../img/t1-2-modulacio/am_2.png",
   "options": [
    "AM",
    "FM",
    "PSK",
    "FSK",
    "QAM"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En FM l'amplitud seria constant.",
    "PSK és digital: l'amplitud seria constant i hi hauria salts de fase.",
    "FSK és digital: l'amplitud seria constant amb dues freqüències.",
    "QAM és digital, amb nivells discrets; aquí l'envolupant varia de forma contínua."
   ]
  },
  {
   "type": "multichoice",
   "text": "En aquest senyal AM s'ha dibuixat una línia discontínua vermella que ressegueix els pics. Què representa?",
   "explanation": "La línia discontínua és l'envolupant del senyal AM, que reprodueix el senyal modulador (la informació). El detector d'envolupant la recupera al receptor.",
   "image": "../img/t1-2-modulacio/am_envolupant.png",
   "options": [
    "L'envolupant, que reprodueix el senyal modulador (la informació).",
    "La portadora sense modular, abans d'aplicar-hi la informació.",
    "La freqüència intermèdia que s'obté al receptor superheterodí.",
    "El soroll que el canal afegeix a l'amplitud del senyal.",
    "La desviació de freqüència Δf respecte de la portadora."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La portadora són les oscil·lacions ràpides; l'envolupant és el seu contorn.",
    "La FI és una freqüència interna del receptor superheterodí.",
    "L'envolupant porta la informació, no el soroll.",
    "Δf és un paràmetre de la FM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Aquest espectre mostra una línia central a la freqüència de la portadora i una sola línia a cada costat. Quina modulació representa?",
   "explanation": "En AM l'espectre té la portadora (la línia més alta) i dues bandes laterals, una a cada costat. En FM hi hauria moltes bandes laterals.",
   "image": "../img/t1-2-modulacio/espectre_am.png",
   "options": [
    "AM: portadora i dues bandes laterals (LSB i USB).",
    "FM, amb infinites bandes laterals de Bessel.",
    "SSB, que elimina la portadora i una banda lateral.",
    "FSK, amb una freqüència per a cada bit.",
    "Una portadora sense modular."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En FM es veurien moltes línies a cada costat.",
    "La SSB no té portadora i té una sola banda lateral.",
    "FSK tindria dues freqüències, una per bit, sense línia central de portadora.",
    "Una portadora sense modular tindria una sola línia, sense bandes laterals."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació analògica genera un espectre com aquest, amb moltes bandes laterals a cada costat de la portadora?",
   "explanation": "La FM genera (en teoria) infinites bandes laterals, d'amplitud donada per les funcions de Bessel. La regla de Carson indica quines cal conservar.",
   "image": "../img/t1-2-modulacio/espectre_fm.png",
   "options": [
    "FM",
    "AM",
    "SSB",
    "DSB",
    "VSB"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'AM genera només dues bandes laterals.",
    "La SSB té una sola banda lateral.",
    "La DSB té dues bandes laterals.",
    "La VSB té una banda lateral i un vestigi de l'altra."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada senyal amb el tipus de modulació.",
   "explanation": "AM: l'amplitud varia de forma contínua. FM: la freqüència varia de forma contínua. ASK: l'amplitud salta segons els bits. FSK: dues freqüències segons els bits. PSK: salts de fase de 180°.",
   "imageTerms": true,
   "pairs": [
    [
     "../img/t1-2-modulacio/am_1.png",
     "AM"
    ],
    [
     "../img/t1-2-modulacio/fm_1.png",
     "FM"
    ],
    [
     "../img/t1-2-modulacio/ask.png",
     "ASK"
    ],
    [
     "../img/t1-2-modulacio/fsk.png",
     "FSK"
    ],
    [
     "../img/t1-2-modulacio/psk.png",
     "PSK (BPSK)"
    ]
   ],
   "distractors": [
    "QAM"
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina és la característica principal d'un senyal analògic?",
   "explanation": "Un senyal analògic pot prendre qualsevol valor dins d'un rang continu en qualsevol instant; entre dos valors sempre n'hi ha infinits d'intermedis.",
   "options": [
    "Pot prendre qualsevol valor dins d'un rang continu en qualsevol instant.",
    "Només pot prendre els valors 0 i 1 en cada instant de temps.",
    "Pot prendre un nombre finit de valors predefinits per nivells.",
    "Canvia sempre amb salts bruscos entre valors discrets.",
    "No es veu afectat pel soroll ni per la distorsió."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és un senyal digital binari.",
    "Això és un senyal quantificat o digital.",
    "Un senyal analògic varia de manera suau i contínua.",
    "Els senyals analògics són molt susceptibles al soroll."
   ]
  },
  {
   "type": "matching",
   "text": "Ordena les etapes de la conversió analògica-digital.",
   "explanation": "Primer es mostreja (es prenen mostres a la freqüència fs), després es quantifica (cada mostra s'assigna a un nivell) i finalment es codifica (cada nivell es converteix en bits).",
   "ordering": true,
   "pairs": [
    [
     "Mostreig",
     "1"
    ],
    [
     "Quantificació",
     "2"
    ],
    [
     "Codificació",
     "3"
    ]
   ],
   "distractors": []
  },
  {
   "type": "multichoice",
   "text": "Què estableix el teorema de Nyquist?",
   "explanation": "Per digitalitzar correctament un senyal, la freqüència de mostreig ha de ser, com a mínim, el doble de la freqüència màxima del senyal (fs ≥ 2·fmax). A la pràctica s'hi afegeix un marge.",
   "options": [
    "Que cal mostrejar, com a mínim, al doble de la freqüència màxima del senyal.",
    "Que cal mostrejar exactament a la freqüència màxima del senyal original.",
    "Que cal mostrejar a la meitat de la freqüència màxima del senyal.",
    "Que amb n bits es poden representar 2ⁿ nivells de quantificació diferents.",
    "Que l'ample de banda d'un senyal FM és 2(Δf + fm)."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Mostrejar a fmax provoca aliàsing; cal com a mínim el doble.",
    "Mostrejar per sota del doble de fmax provoca aliàsing.",
    "Això és la resolució de la quantificació.",
    "Això és la regla de Carson."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què passa si la freqüència de mostreig és massa baixa?",
   "explanation": "Si es mostreja per sota de 2·fmax apareix aliàsing (distorsió) i no es pot recuperar el senyal original.",
   "options": [
    "Es produeix aliàsing i no es pot recuperar el senyal original.",
    "Es generen massa dades i augmenten l'ample de banda i el cost.",
    "Augmenta l'error de quantificació de cada mostra.",
    "El senyal es comprimeix sense pèrdues d'informació.",
    "Millora la relació senyal-soroll de quantificació."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això passa quan la freqüència de mostreig és massa alta.",
    "L'error de quantificació depèn del nombre de bits, no de fs.",
    "Mostrejar poc no és una compressió sense pèrdues.",
    "No millora res: apareix distorsió."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quants nivells de quantificació es poden representar amb 8 bits?",
   "explanation": "Amb n bits es poden representar 2ⁿ nivells: 2⁸ = 256.",
   "options": [
    "256",
    "8",
    "16",
    "64",
    "65.536"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Amb 8 bits no hi ha 8 nivells, sinó 2⁸.",
    "16 seria 2⁴ (4 bits).",
    "64 seria 2⁶ (6 bits).",
    "65.536 = 2¹⁶ correspon a 16 bits."
   ]
  },
  {
   "type": "multichoice",
   "text": "Com es pot reduir l'error (soroll) de quantificació?",
   "explanation": "L'error de quantificació és inherent al procés, però es redueix augmentant el nombre de nivells, és a dir, el nombre de bits.",
   "options": [
    "Augmentant el nombre de bits (i, per tant, de nivells).",
    "Reduint la freqüència de mostreig del convertidor.",
    "Eliminant el filtre anti-aliàsing de l'entrada.",
    "Reduint el nombre de bits de cada mostra.",
    "No es pot reduir de cap manera: és constant."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La freqüència de mostreig no afecta l'error de quantificació i, si és massa baixa, provoca aliàsing.",
    "El filtre anti-aliàsing té una altra funció.",
    "Menys bits vol dir menys nivells i més error.",
    "No es pot eliminar del tot, però sí reduir-lo."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin d'aquests formats utilitza compressió sense pèrdues?",
   "explanation": "La compressió sense pèrdues redueix la redundància sense perdre informació (FLAC, ZIP). La compressió amb pèrdues elimina informació poc perceptible (MP3, JPEG).",
   "options": [
    "FLAC",
    "MP3",
    "JPEG",
    "ADPCM",
    "Modulació delta"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "MP3 és compressió amb pèrdues.",
    "JPEG és compressió amb pèrdues.",
    "ADPCM és un tipus de codificació, no un format de compressió sense pèrdues.",
    "És una codificació d'un bit per mostra."
   ]
  },
  {
   "type": "multichoice",
   "text": "En una constel·lació I/Q, què representen els eixos?",
   "explanation": "L'eix horitzontal és la component I (en fase) i el vertical, la Q (en quadratura). Provenen de dues ones de la mateixa freqüència desfasades 90°.",
   "options": [
    "Horitzontal: component en fase (I). Vertical: component en quadratura (Q).",
    "Horitzontal: temps. Vertical: amplitud instantània del senyal.",
    "Horitzontal: freqüència. Vertical: potència de cada component.",
    "Horitzontal: el bit 0. Vertical: el bit 1 de cada símbol.",
    "Tots dos: freqüències de dues portadores diferents."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és una representació temporal, no una constel·lació.",
    "Això és un espectre.",
    "Els eixos són components del senyal, no bits.",
    "I i Q tenen la mateixa freqüència i són desfasades 90°."
   ]
  },
  {
   "type": "multichoice",
   "text": "En una constel·lació I/Q, si tracem una fletxa des del centre fins a un punt, què indiquen la seva longitud i el seu angle?",
   "explanation": "La longitud de la fletxa indica l'amplitud del senyal i l'angle, la seva fase.",
   "options": [
    "La longitud indica l'amplitud i l'angle, la fase.",
    "La longitud indica la fase i l'angle, l'amplitud.",
    "La longitud indica la freqüència i l'angle, la fase.",
    "La longitud indica el nombre de bits i l'angle, la velocitat.",
    "Tots dos indiquen el soroll del canal."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És al revés.",
    "La freqüència no es llegeix a la constel·lació.",
    "Els bits s'associen a cada punt, no a la longitud.",
    "El soroll es veu com a núvols al voltant dels punts."
   ]
  },
  {
   "type": "multichoice",
   "text": "Què és un símbol en la transmissió de dades digitals?",
   "explanation": "Un símbol és un estat del senyal (amplitud, fase o freqüència) que s'envia durant un interval de temps. Pot representar un bit o diversos bits.",
   "options": [
    "Un estat del senyal que pot representar un o diversos bits.",
    "Sempre és un sol bit, sigui quina sigui la modulació.",
    "És la portadora sense modular que s'envia entre bits.",
    "És el soroll que afecta cada bit durant la transmissió.",
    "És sempre un byte complet (8 bits) de dades."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Un símbol pot representar diversos bits (per exemple, 2 en QPSK).",
    "La portadora per si sola no porta informació.",
    "El soroll no és un símbol.",
    "El nombre de bits per símbol depèn de la modulació."
   ]
  },
  {
   "type": "multichoice",
   "text": "Per què, amb la mateixa potència mitjana, una 16-QAM necessita més qualitat de senyal que una QPSK?",
   "explanation": "Amb més punts a la constel·lació i la mateixa potència, els punts queden més junts, i el soroll pot fer que el receptor confongui un símbol amb un altre.",
   "options": [
    "Perquè els punts queden més junts i el soroll pot fer confondre símbols.",
    "Perquè la 16-QAM transmet menys bits per símbol que la QPSK.",
    "Perquè la 16-QAM no fa servir les components I i Q.",
    "Perquè la QPSK no es veu gens afectada pel soroll del canal.",
    "Perquè la 16-QAM treballa a una freqüència portadora més baixa."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La 16-QAM en transmet 4 i la QPSK, 2.",
    "La QAM fa servir I i Q.",
    "Tota modulació es veu afectada pel soroll.",
    "La freqüència no és el que diferencia la robustesa."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quants bits s'envien alhora en cada símbol d'un senyal modulat en 8-PSK?",
   "explanation": "La 8-PSK té 8 fases (8 símbols) possibles. Com que 2³ = 8, cada símbol porta 3 bits alhora.",
   "options": [
    "3 bits",
    "8 bits",
    "2 bits",
    "1 bit",
    "4 bits"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "8 és el nombre de símbols (fases), no de bits per símbol.",
    "2 bits per símbol correspon a QPSK (4 fases).",
    "1 bit per símbol correspon a BPSK (2 fases).",
    "4 bits per símbol correspondria a 16 fases o a 16-QAM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quants bits per símbol transmet una 1024-QAM?",
   "explanation": "2¹⁰ = 1024, per tant cada símbol porta 10 bits.",
   "options": [
    "10 bits",
    "8 bits",
    "1024 bits",
    "12 bits",
    "32 bits"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "8 bits per símbol correspon a 256-QAM.",
    "1024 és el nombre de símbols, no de bits.",
    "12 bits donarien 4096 símbols.",
    "Has fet l'arrel quadrada de 1024."
   ]
  },
  {
   "type": "multichoice",
   "text": "De quina modulació analògica es pot considerar la versió digital l'ASK?",
   "explanation": "L'ASK és la versió digital de l'AM: varia l'amplitud de la portadora per representar els bits.",
   "options": [
    "De l'AM.",
    "De la FM.",
    "De la PM.",
    "De la COFDM.",
    "De cap: no té equivalent analògic."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La versió digital de la FM és la FSK.",
    "La versió digital de la PM és la PSK.",
    "COFDM ja és una modulació digital.",
    "Té equivalent: l'AM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és el principal inconvenient de l'ASK?",
   "explanation": "L'ASK és molt sensible al soroll i a les interferències, perquè la informació va en l'amplitud, que és precisament el que el soroll altera.",
   "options": [
    "És molt sensible al soroll i a les interferències.",
    "És molt complexa d'implementar.",
    "Necessita moltes freqüències diferents.",
    "Requereix sincronitzar la fase.",
    "Només es pot utilitzar en satèl·lits."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "L'ASK és relativament simple.",
    "Això és propi de l'MFSK.",
    "Això és més propi de la PSK.",
    "Té aplicacions senzilles com RFID o fibra."
   ]
  },
  {
   "type": "multichoice",
   "text": "En FSK binària, com es representen els bits 1 i 0?",
   "explanation": "En FSK un 1 es representa amb una freqüència (f1) i un 0 amb una altra freqüència (f0); l'amplitud és constant.",
   "options": [
    "Amb dues freqüències diferents de la portadora (f1 i f0).",
    "Amb dues amplituds diferents de la portadora.",
    "Amb dues fases de la portadora separades 180°.",
    "Amb presència o absència de la portadora.",
    "Amb quatre punts d'una constel·lació I/Q."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és ASK.",
    "Això és BPSK.",
    "Això és ASK (OOK).",
    "Això és QPSK."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quants bits per símbol transmet una 8-FSK?",
   "explanation": "Una 8-FSK fa servir 8 freqüències diferents: log₂ 8 = 3 bits per símbol.",
   "options": [
    "3 bits",
    "8 bits",
    "2 bits",
    "4 bits",
    "1 bit"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "8 és el nombre de freqüències, no de bits.",
    "2 bits per símbol correspon a 4-FSK.",
    "4 bits per símbol correspondria a 16-FSK.",
    "1 bit per símbol correspon a FSK binària."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és un inconvenient de l'MFSK (FSK amb múltiples freqüències)?",
   "explanation": "En augmentar el nombre de freqüències, el receptor és més complex, el sistema és més sensible al soroll i cal més potència per mantenir la qualitat.",
   "options": [
    "Receptor més complex i més sensible al soroll com més freqüències hi ha.",
    "Transmet menys bits per símbol que la FSK binària clàssica.",
    "No permet augmentar la velocitat de transmissió de dades.",
    "Varia l'amplitud de la portadora i és sensible al soroll.",
    "Només es pot utilitzar en enllaços de fibra òptica."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En transmet més.",
    "Precisament la permet augmentar sense augmentar la taxa de símbols.",
    "L'FSK manté l'amplitud constant.",
    "No és una limitació de l'MFSK."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina és una aplicació típica de l'FSK?",
   "explanation": "L'FSK s'ha utilitzat en mòdems telefònics antics, comunicacions per ràdio, telecomandament i telemetria.",
   "options": [
    "Els mòdems telefònics antics.",
    "La TDT europea (DVB-T).",
    "Els mòdems de cable DOCSIS.",
    "La TV per satèl·lit DVB-S.",
    "La TV analògica (vídeo)."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La TDT fa servir COFDM.",
    "DOCSIS fa servir QAM.",
    "DVB-S fa servir QPSK.",
    "El vídeo de la TV analògica fa servir AM VSB."
   ]
  },
  {
   "type": "multichoice",
   "text": "En BPSK, quina diferència de fase hi ha entre els dos símbols?",
   "explanation": "La BPSK fa servir dues fases separades 180°. La QPSK fa servir quatre fases separades 90°.",
   "options": [
    "180°",
    "90°",
    "45°",
    "360°",
    "0°"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "90° és la separació de les fases en QPSK.",
    "45° és la separació en 8-PSK.",
    "Una diferència de 360° equival a la mateixa fase.",
    "Si no hi hagués diferència de fase, no es podrien distingir els bits."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin avantatge té la PSK respecte de l'ASK?",
   "explanation": "La PSK és més robusta davant del soroll i permet taxes d'error més baixes amb la mateixa relació senyal/soroll, tot i que és més complexa d'implementar.",
   "options": [
    "És més robusta davant del soroll i dona menys errors.",
    "És més senzilla d'implementar que l'ASK.",
    "No necessita cap portadora per transmetre.",
    "Varia l'amplitud de forma més precisa que l'ASK.",
    "Ocupa infinites bandes laterals, com la FM."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La PSK és més complexa que l'ASK o l'FSK.",
    "La PSK modula la fase d'una portadora.",
    "La PSK no varia l'amplitud.",
    "No és un avantatge ni una característica de la PSK."
   ]
  },
  {
   "type": "multichoice",
   "text": "Com funciona la modulació QAM?",
   "explanation": "La QAM fa servir dues portadores de la mateixa freqüència desfasades 90° (en quadratura), cadascuna modulada en amplitud. Així combina canvis d'amplitud i de fase.",
   "options": [
    "Modula en amplitud dues portadores desfasades 90° (en quadratura).",
    "Fa servir dues freqüències diferents per als bits 0 i 1.",
    "Només varia la fase de la portadora, amb amplitud constant.",
    "Encén i apaga la portadora segons el valor de cada bit.",
    "Reparteix les dades en milers de subportadores ortogonals."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Això és FSK.",
    "Això és PSK.",
    "Això és ASK (OOK).",
    "Això és OFDM/COFDM."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quin és un inconvenient de la QAM d'ordre alt (64-QAM, 256-QAM)?",
   "explanation": "La QAM té una gran eficiència espectral, però és més susceptible al soroll i a les distorsions, i requereix un canal de bona qualitat.",
   "options": [
    "És més susceptible al soroll i requereix un canal de bona qualitat.",
    "Té una eficiència espectral molt baixa en comparació amb la PSK.",
    "Només transmet un bit per símbol, com la BPSK.",
    "No es pot utilitzar en sistemes de comunicació digitals.",
    "Necessita moltes freqüències diferents, com l'MFSK."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "És precisament la que té més eficiència espectral.",
    "Transmet 6 o 8 bits per símbol.",
    "És una modulació digital.",
    "Això és propi de l'MFSK."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada modulació digital amb una de les seves aplicacions.",
   "explanation": "ASK: RFID senzills i fibra òptica. FSK: mòdems telefònics antics. QPSK: TV per satèl·lit (DVB-S). QAM: mòdems de cable (DOCSIS) i ADSL. COFDM: TDT (DVB-T).",
   "pairs": [
    [
     "ASK",
     "RFID senzills i fibra òptica"
    ],
    [
     "FSK",
     "Mòdems telefònics antics"
    ],
    [
     "QPSK",
     "TV per satèl·lit (DVB-S)"
    ],
    [
     "QAM",
     "Mòdems de cable (DOCSIS) i ADSL"
    ],
    [
     "COFDM",
     "TDT europea (DVB-T)"
    ]
   ],
   "distractors": [
    "Radiodifusió en ona mitjana"
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació digital mostra aquest senyal?",
   "explanation": "La portadora apareix quan el bit és 1 i desapareix quan el bit és 0: varia l'amplitud de forma discreta. És ASK (OOK).",
   "image": "../img/t1-2-modulacio/ask.png",
   "options": [
    "ASK",
    "FSK",
    "PSK",
    "AM analògica",
    "FM analògica"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En FSK la portadora sempre hi és, amb dues freqüències diferents.",
    "En PSK la portadora sempre hi és amb la mateixa amplitud; canvia la fase.",
    "Aquí l'amplitud salta entre dos valors segons els bits; l'AM varia de forma contínua.",
    "En FM l'amplitud és constant."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació digital mostra aquest senyal?",
   "explanation": "L'amplitud és constant, i la freqüència és alta quan el bit és 1 i baixa quan és 0. És FSK.",
   "image": "../img/t1-2-modulacio/fsk.png",
   "options": [
    "FSK",
    "ASK",
    "PSK",
    "QAM",
    "FM analògica"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En ASK l'amplitud canvia; aquí és constant.",
    "En PSK la freqüència és la mateixa per als dos bits.",
    "En QAM canviarien l'amplitud i la fase.",
    "En FM la freqüència varia de forma contínua; aquí salta entre dos valors segons els bits."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació digital mostra aquest senyal?",
   "explanation": "L'amplitud i la freqüència són constants, però a cada canvi de bit l'ona salta de cop (s'inverteix): hi ha un canvi de fase de 180°. És PSK (BPSK).",
   "image": "../img/t1-2-modulacio/psk.png",
   "options": [
    "PSK (BPSK)",
    "ASK",
    "FSK",
    "AM analògica",
    "FM analògica"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En ASK l'amplitud canviaria.",
    "En FSK canviaria la freqüència; aquí és sempre la mateixa.",
    "L'amplitud és constant.",
    "La freqüència no varia."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació correspon a aquesta constel·lació?",
   "explanation": "Hi ha quatre punts de la mateixa amplitud separats 90°: és QPSK, que transmet 2 bits per símbol.",
   "image": "../img/t1-2-modulacio/c_qpsk.png",
   "options": [
    "QPSK",
    "BPSK",
    "8-PSK",
    "16-QAM",
    "ASK (OOK)"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La BPSK només té dos punts.",
    "La 8-PSK té vuit punts en un cercle.",
    "La 16-QAM té setze punts en una quadrícula.",
    "L'OOK té dos punts sobre l'eix I, un a l'origen."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació correspon a aquesta constel·lació?",
   "explanation": "Hi ha dos punts amb la mateixa amplitud separats 180°: és BPSK, 1 bit per símbol.",
   "image": "../img/t1-2-modulacio/c_bpsk.png",
   "options": [
    "BPSK",
    "QPSK",
    "ASK (OOK)",
    "16-QAM",
    "8-PSK"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La QPSK té quatre punts.",
    "En OOK un dels punts seria a l'origen (amplitud zero).",
    "La 16-QAM té setze punts.",
    "La 8-PSK té vuit punts."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació correspon a aquesta constel·lació?",
   "explanation": "Vuit punts amb la mateixa amplitud (sobre un cercle) i separats 45°: és 8-PSK, 3 bits per símbol.",
   "image": "../img/t1-2-modulacio/c_8psk.png",
   "options": [
    "8-PSK",
    "QPSK",
    "16-QAM",
    "8-FSK",
    "64-QAM"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La QPSK té quatre punts.",
    "En 16-QAM els punts formen una quadrícula i tenen amplituds diferents.",
    "L'FSK no es representa amb punts sobre un cercle en I/Q.",
    "La 64-QAM té 64 punts en quadrícula."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació correspon a aquesta constel·lació?",
   "explanation": "Setze punts en una quadrícula 4×4, amb amplituds i fases diferents: és 16-QAM, 4 bits per símbol.",
   "image": "../img/t1-2-modulacio/c_16qam.png",
   "options": [
    "16-QAM",
    "16-PSK",
    "64-QAM",
    "QPSK",
    "8-PSK"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En 16-PSK tots els punts estarien sobre un cercle (mateixa amplitud).",
    "La 64-QAM té una quadrícula de 8×8.",
    "La QPSK té només quatre punts.",
    "La 8-PSK té vuit punts sobre un cercle."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació correspon a aquesta constel·lació?",
   "explanation": "Hi ha una quadrícula de 8×8 = 64 punts: és 64-QAM, 6 bits per símbol.",
   "image": "../img/t1-2-modulacio/c_64qam.png",
   "options": [
    "64-QAM",
    "16-QAM",
    "256-QAM",
    "8-PSK",
    "32-QAM"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "La 16-QAM té una quadrícula de 4×4.",
    "La 256-QAM té una quadrícula de 16×16.",
    "La 8-PSK té vuit punts sobre un cercle.",
    "Compta els punts: n'hi ha 8 × 8 = 64."
   ]
  },
  {
   "type": "multichoice",
   "text": "Aquesta constel·lació té un punt a l'origen i un altre sobre l'eix I. A quina modulació correspon?",
   "explanation": "Un punt d'amplitud zero (bit 0) i un altre d'amplitud màxima (bit 1), amb la mateixa fase: és ASK en la variant OOK (encès/apagat).",
   "image": "../img/t1-2-modulacio/c_ook.png",
   "options": [
    "ASK",
    "BPSK",
    "QPSK",
    "FSK",
    "16-QAM"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "En BPSK els dos punts tenen la mateixa amplitud i són oposats (180°).",
    "La QPSK té quatre punts.",
    "L'FSK es diferencia per la freqüència, que no es veu així en una constel·lació I/Q.",
    "La 16-QAM té setze punts."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quants bits transmet cada símbol de la modulació que mostra aquesta constel·lació?",
   "explanation": "Hi ha 16 punts, per tant cada símbol porta log₂ 16 = 4 bits (és una 16-QAM).",
   "image": "../img/t1-2-modulacio/c_16qam.png",
   "options": [
    "4 bits",
    "16 bits",
    "2 bits",
    "8 bits",
    "6 bits"
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "16 és el nombre de símbols, no de bits.",
    "2 bits donarien només 4 punts.",
    "8 bits donarien 256 punts.",
    "6 bits donarien 64 punts."
   ]
  },
  {
   "type": "multichoice",
   "text": "Aquesta captura mostra els símbols rebuts d'una 16-QAM. Els núvols de mostres gairebé es toquen entre ells. Què indica?",
   "explanation": "El soroll desplaça les mostres al voltant dels punts ideals. Quan els núvols s'encavalquen, el receptor pot decidir un símbol equivocat: cal més qualitat de senyal o una modulació amb menys punts.",
   "image": "../img/t1-2-modulacio/c_16qam_soroll.png",
   "options": [
    "Que hi ha molt soroll i el receptor pot confondre símbols i cometre errors.",
    "Que el senyal és perfecte i el receptor no cometrà cap error.",
    "Que la modulació s'ha convertit en una 64-QAM per efecte del soroll.",
    "Que el transmissor ha canviat a FSK durant la captura.",
    "Que convé passar a una QAM d'ordre més alt per reduir errors."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Si no hi hagués soroll, les mostres coincidirien amb els punts ideals.",
    "Els núvols no són punts nous: són els 16 punts afectats per soroll.",
    "La forma de quadrícula és pròpia de la QAM.",
    "Amb més punts quedarien encara més junts i hi hauria més errors."
   ]
  },
  {
   "type": "multichoice",
   "text": "Quina modulació mostra aquesta captura de símbols rebuts, i com és la qualitat del senyal?",
   "explanation": "Hi ha quatre núvols compactes i ben separats en els quatre quadrants: és QPSK amb poc soroll, de manera que el receptor decidirà correctament.",
   "image": "../img/t1-2-modulacio/c_qpsk_soroll.png",
   "options": [
    "QPSK, amb poc soroll: els núvols estan ben separats.",
    "QPSK, amb tant soroll que es confonen els símbols.",
    "16-QAM, amb poc soroll.",
    "BPSK, amb molt soroll.",
    "8-PSK, amb poc soroll."
   ],
   "correct": 0,
   "penalty": 0.25,
   "optionFeedback": [
    null,
    "Els núvols estan clarament separats.",
    "Només hi ha quatre núvols.",
    "La BPSK tindria només dos núvols.",
    "La 8-PSK tindria vuit núvols."
   ]
  },
  {
   "type": "matching",
   "text": "Relaciona cada constel·lació amb la seva modulació.",
   "explanation": "BPSK: 2 punts a 180°. QPSK: 4 punts a 90°. 8-PSK: 8 punts sobre un cercle. 16-QAM: quadrícula 4×4. 64-QAM: quadrícula 8×8.",
   "imageTerms": true,
   "pairs": [
    [
     "../img/t1-2-modulacio/c_bpsk.png",
     "BPSK"
    ],
    [
     "../img/t1-2-modulacio/c_qpsk.png",
     "QPSK"
    ],
    [
     "../img/t1-2-modulacio/c_8psk.png",
     "8-PSK"
    ],
    [
     "../img/t1-2-modulacio/c_16qam.png",
     "16-QAM"
    ],
    [
     "../img/t1-2-modulacio/c_64qam.png",
     "64-QAM"
    ]
   ],
   "distractors": [
    "256-QAM"
   ]
  }
 ]
};
