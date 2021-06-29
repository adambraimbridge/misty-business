import styles from '../styles/Home.module.css'
import Image from 'next/image'

import gallery1photo1 from '../public/photos/IMG_20210213_091130.jpg'
import gallery1photo2 from '../public/photos/IMG_20210214_120837.jpg'
import gallery1photo3 from '../public/photos/IMG_20210215-WA0005.jpg'
import gallery1photo4 from '../public/photos/IMG_20210215_123937.jpg'
import gallery1photo5 from '../public/photos/IMG_20210215_123944.jpg'
import gallery1photo6 from '../public/photos/IMG_20210215_123949.jpg'
import gallery1photo7 from '../public/photos/IMG_20210215_123959.jpg'
import gallery1photo8 from '../public/photos/IMG_20210215_124922.jpg'

import gallery2photo1 from '../public/photos/IMG_20210217_104355.jpg'
import gallery2photo2 from '../public/photos/IMG_20210217_104403.jpg'
import gallery2photo3 from '../public/photos/IMG_20210217_104406.jpg'
import gallery2photo4 from '../public/photos/IMG_20210217_104415.jpg'

import gallery3photo1 from '../public/photos/IMG_20210218_121936.jpg'
import gallery3photo2 from '../public/photos/IMG_20210218_121941.jpg'
import gallery3photo3 from '../public/photos/IMG_20210218_121949.jpg'
import gallery3photo4 from '../public/photos/IMG_20210218_121953.jpg'
import gallery3photo5 from '../public/photos/IMG_20210218_121957.jpg'
import gallery3photo6 from '../public/photos/IMG_20210218_122000.jpg'
import gallery3photo7 from '../public/photos/IMG_20210218_131730.jpg'
import gallery3photo8 from '../public/photos/IMG_20210218_135355.jpg'

import gallery4photo1 from '../public/photos/IMG_20210219_120532.jpg'
import gallery4photo2 from '../public/photos/IMG_20210219_120538.jpg'

import gallery5photo1 from '../public/photos/IMG_20210222_171300.jpg'
import gallery5photo2 from '../public/photos/IMG_20210222_171303.jpg'
import gallery5photo3 from '../public/photos/IMG_20210222_171309.jpg'

import gallery6photo1 from '../public/photos/IMG_20210224_081621.jpg'
import gallery6photo2 from '../public/photos/IMG_20210224_081626.jpg'
import gallery6photo3 from '../public/photos/IMG_20210224_081651.jpg'
import gallery6photo4 from '../public/photos/IMG_20210224_174415.jpg'
import gallery6photo5 from '../public/photos/IMG_20210224_174418.jpg'
import gallery6photo6 from '../public/photos/IMG_20210224_174437.jpg'
import gallery6photo7 from '../public/photos/IMG_20210224_174439.jpg'
import gallery6photo8 from '../public/photos/IMG_20210224_174440.jpg'
import gallery6photo9 from '../public/photos/IMG_20210224_174441.jpg'
import gallery6photo10 from '../public/photos/IMG_20210224_174443.jpg'
import gallery6photo11 from '../public/photos/IMG_20210224_174444.jpg'
import gallery6photo12 from '../public/photos/IMG_20210224_174446.jpg'
import gallery6photo13 from '../public/photos/IMG_20210224_174447.jpg'
import gallery6photo14 from '../public/photos/IMG_20210224_174451.jpg'
import gallery6photo15 from '../public/photos/IMG_20210224_174452.jpg'
import gallery6photo16 from '../public/photos/IMG_20210224_174453.jpg'
import gallery6photo17 from '../public/photos/IMG_20210224_174454.jpg'

const galleryData = [
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
        gallery1photo1,
        gallery1photo2,
        gallery1photo3,
        gallery1photo4,
        gallery1photo5,
        gallery1photo6,
        gallery1photo7,
        gallery1photo8,
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
        gallery2photo1,
        gallery2photo2,
        gallery2photo3,
        gallery2photo4,
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
        gallery3photo1,
        gallery3photo2,
        gallery3photo3,
        gallery3photo4,
        gallery3photo5,
        gallery3photo6,
        gallery3photo7,
        gallery3photo8,
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
        gallery4photo1,
        gallery4photo2,
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
        gallery5photo1,
        gallery5photo2,
        gallery5photo3,
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
        gallery6photo1,
        gallery6photo2,
        gallery6photo3,
        gallery6photo4,
        gallery6photo5,
        gallery6photo6,
        gallery6photo7,
        gallery6photo8,
        gallery6photo9,
        gallery6photo10,
        gallery6photo11,
        gallery6photo12,
        gallery6photo13,
        gallery6photo14,
        gallery6photo15,
        gallery6photo16,
        gallery6photo17,
    ]
  },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210225_030407.jpg',
//       '../public/photos/IMG_20210225_030940.jpg',
//       '../public/photos/IMG_20210225_063959.jpg',
//       '../public/photos/IMG_20210225_102246.jpg',
//       '../public/photos/IMG_20210225_102307.jpg',
//       '../public/photos/IMG_20210225_102332.jpg',
//       '../public/photos/IMG_20210225_102334.jpg',
//       '../public/photos/IMG_20210225_120941.jpg',
//       '../public/photos/IMG_20210225_143623.jpg',
//       '../public/photos/IMG_20210225_143627.jpg',
//       '../public/photos/IMG_20210225_154615.jpg',
//       '../public/photos/IMG_20210225_154621.jpg',
//       '../public/photos/IMG_20210225_154622.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210226_070108.jpg',
//       '../public/photos/IMG_20210226_104404.jpg',
//       '../public/photos/IMG_20210226_125756.jpg',
//       '../public/photos/IMG_20210226_125809.jpg',
//       '../public/photos/IMG_20210226_125821.jpg',
//       '../public/photos/IMG_20210226_131202.jpg',
//       '../public/photos/IMG_20210226_131203.jpg',
//       '../public/photos/IMG_20210226_140739.jpg',
//       '../public/photos/IMG_20210226_140746.jpg',
//       '../public/photos/IMG_20210226_140750.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210303_123417.jpg',
//       '../public/photos/IMG_20210303_123419.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210305-WA0001.jpg',
//       '../public/photos/IMG_20210305_071827.jpg',
//       '../public/photos/IMG_20210305_191931.jpg',
//       '../public/photos/IMG_20210305_191945.jpg',
//       '../public/photos/IMG_20210305_191952.jpg',
//       '../public/photos/IMG_20210305_192005.jpg',
//       '../public/photos/IMG_20210305_194131.jpg',
//       '../public/photos/IMG_20210305_200458.jpg',
//       '../public/photos/IMG_20210305_200509.jpg',
//       '../public/photos/IMG_20210305_200514.jpg',
//       '../public/photos/IMG_20210305_200520.jpg',
//       '../public/photos/IMG_20210305_200527.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210307_062905.jpg',
//       '../public/photos/IMG_20210307_062913.jpg',
//       '../public/photos/IMG_20210307_062916.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210308_065835.jpg',
//       '../public/photos/IMG_20210308_065848.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210311_085542.jpg',
//       '../public/photos/IMG_20210311_085711.jpg',
//       '../public/photos/IMG_20210311_085716.jpg',
//       '../public/photos/IMG_20210311_085723.jpg',
//       '../public/photos/IMG_20210311_085727.jpg',
//       '../public/photos/IMG_20210311_085749.jpg',
//       '../public/photos/IMG_20210311_085757.jpg',
//       '../public/photos/IMG_20210311_085812.jpg',
//       '../public/photos/IMG_20210311_085816.jpg',
//       '../public/photos/IMG_20210311_085821.jpg',
//       '../public/photos/IMG_20210311_085824.jpg',
//       '../public/photos/IMG_20210311_090718.jpg',
//       '../public/photos/IMG_20210311_090727.jpg',
//       '../public/photos/IMG_20210311_090743.jpg',
//       '../public/photos/IMG_20210311_090751.jpg',
//       '../public/photos/IMG_20210311_090756.jpg',
//       '../public/photos/IMG_20210311_090801.jpg',
//       '../public/photos/IMG_20210311_090812.jpg',
//       '../public/photos/IMG_20210311_090816.jpg',
//       '../public/photos/IMG_20210311_090821.jpg',
//       '../public/photos/IMG_20210311_090859.jpg',
//       '../public/photos/IMG_20210311_090902.jpg',
//       '../public/photos/IMG_20210311_090907.jpg',
//       '../public/photos/IMG_20210311_090922.jpg',
//       '../public/photos/IMG_20210311_090936.jpg',
//       '../public/photos/IMG_20210311_090938.jpg',
//       '../public/photos/IMG_20210311_090945.jpg',
//       '../public/photos/IMG_20210311_102332.jpg',
//       '../public/photos/IMG_20210311_102749.jpg',
//       '../public/photos/IMG_20210311_102751.jpg',
//       '../public/photos/IMG_20210311_103922.jpg',
//       '../public/photos/IMG_20210311_103925.jpg',
//       '../public/photos/IMG_20210311_103928.jpg',
//       '../public/photos/IMG_20210311_135602.jpg',
//       '../public/photos/IMG_20210311_135604.jpg',
//       '../public/photos/IMG_20210311_135608.jpg',
//       '../public/photos/IMG_20210311_140614.jpg',
//       '../public/photos/IMG_20210311_141127.jpg',
//       '../public/photos/IMG_20210311_141131.jpg',
//       '../public/photos/IMG_20210311_141136.jpg',
//       '../public/photos/IMG_20210311_142200.jpg',
//       '../public/photos/IMG_20210311_142208.jpg',
//       '../public/photos/IMG_20210311_143958.jpg',
//       '../public/photos/IMG_20210311_144004.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210312_110433.jpg',
//       '../public/photos/IMG_20210312_110440.jpg',
//       '../public/photos/IMG_20210312_110449.jpg',
//       '../public/photos/IMG_20210312_110457.jpg',
//       '../public/photos/IMG_20210312_110511.jpg',
//       '../public/photos/IMG_20210312_110537.jpg',
//       '../public/photos/IMG_20210312_113243.jpg',
//       '../public/photos/IMG_20210312_113257.jpg',
//       '../public/photos/IMG_20210312_113304.jpg',
//       '../public/photos/IMG_20210312_113310.jpg',
//       '../public/photos/IMG_20210312_113314.jpg',
//       '../public/photos/IMG_20210312_120536.jpg',
//       '../public/photos/IMG_20210312_130251.jpg',
//       '../public/photos/IMG_20210312_130539.jpg',
//       '../public/photos/IMG_20210312_130550.jpg',
//       '../public/photos/IMG_20210312_130610.jpg',
//       '../public/photos/IMG_20210312_130614.jpg',
//       '../public/photos/IMG_20210312_132931.jpg',
//       '../public/photos/IMG_20210312_141428.jpg',
//       '../public/photos/IMG_20210312_141434.jpg',
//       '../public/photos/IMG_20210312_141533.jpg',
//       '../public/photos/IMG_20210312_141539.jpg',
//       '../public/photos/IMG_20210312_141550.jpg',
//       '../public/photos/IMG_20210312_151541.jpg',
//       '../public/photos/IMG_20210312_151655.jpg',
//       '../public/photos/IMG_20210312_152851.jpg',
//       '../public/photos/IMG_20210312_152856.jpg',
//       '../public/photos/IMG_20210312_163731.jpg',
//       '../public/photos/IMG_20210312_171445.jpg',
//       '../public/photos/IMG_20210312_171447.jpg',
//       '../public/photos/IMG_20210312_171459.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210313_105338.jpg',
//       '../public/photos/IMG_20210313_113143.jpg',
//       '../public/photos/IMG_20210313_113152.jpg',
//       '../public/photos/IMG_20210313_113155.jpg',
//       '../public/photos/IMG_20210313_113159.jpg',
//       '../public/photos/IMG_20210313_113203.jpg',
//       '../public/photos/IMG_20210313_113206.jpg',
//       '../public/photos/IMG_20210313_123126.jpg',
//       '../public/photos/IMG_20210313_123132.jpg',
//       '../public/photos/IMG_20210313_123133.jpg',
//       '../public/photos/IMG_20210313_130922.jpg',
//       '../public/photos/IMG_20210313_130933.jpg',
//       '../public/photos/IMG_20210313_142403.jpg',
//       '../public/photos/IMG_20210313_142747.jpg',
//       '../public/photos/IMG_20210313_160558.jpg',
//       '../public/photos/IMG_20210313_160917.jpg',
//       '../public/photos/IMG_20210313_160922.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210314_115742.jpg',
//       '../public/photos/IMG_20210314_115746.jpg',
//       '../public/photos/IMG_20210314_125846.jpg',
//       '../public/photos/IMG_20210314_125850.jpg',
//       '../public/photos/IMG_20210314_125854.jpg',
//       '../public/photos/IMG_20210314_140139.jpg',
//       '../public/photos/IMG_20210314_140142.jpg',
//       '../public/photos/IMG_20210314_140147.jpg',
//       '../public/photos/IMG_20210314_144913.jpg',
//       '../public/photos/IMG_20210314_144920.jpg',
//       '../public/photos/IMG_20210314_145024.jpg',
//       '../public/photos/IMG_20210314_145029.jpg',
//       '../public/photos/IMG_20210314_145734.jpg',
//       '../public/photos/IMG_20210314_153850.jpg',
//       '../public/photos/IMG_20210314_153857.jpg',
//       '../public/photos/IMG_20210314_153901.jpg',
//       '../public/photos/IMG_20210314_153907.jpg',
//       '../public/photos/IMG_20210314_153914.jpg',
//       '../public/photos/IMG_20210314_153918.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210316_122030.jpg',
//       '../public/photos/IMG_20210316_123653.jpg',
//       '../public/photos/IMG_20210316_124144.jpg',
//       '../public/photos/IMG_20210316_124848.jpg',
//       '../public/photos/IMG_20210316_124952.jpg',
//       '../public/photos/IMG_20210316_124958.jpg',
//       '../public/photos/IMG_20210316_125015.jpg',
//       '../public/photos/IMG_20210316_125017.jpg',
//       '../public/photos/IMG_20210316_125019.jpg',
//       '../public/photos/IMG_20210316_125850.jpg',
//       '../public/photos/IMG_20210316_125910.jpg',
//       '../public/photos/IMG_20210316_131638.jpg',
//       '../public/photos/IMG_20210316_131644.jpg',
//       '../public/photos/IMG_20210316_131654.jpg',
//       '../public/photos/IMG_20210316_132230.jpg',
//       '../public/photos/IMG_20210316_132335.jpg',
//       '../public/photos/IMG_20210316_133045.jpg',
//       '../public/photos/IMG_20210316_133048.jpg',
//       '../public/photos/IMG_20210316_133055.jpg',
//       '../public/photos/IMG_20210316_133057.jpg',
//       '../public/photos/IMG_20210316_133339.jpg',
//       '../public/photos/IMG_20210316_133345.jpg',
//       '../public/photos/IMG_20210316_134143.jpg',
//       '../public/photos/IMG_20210316_134801.jpg',
//       '../public/photos/IMG_20210316_134809.jpg',
//       '../public/photos/IMG_20210316_135545.jpg',
//       '../public/photos/IMG_20210316_135551.jpg',
//       '../public/photos/IMG_20210316_135641.jpg',
//       '../public/photos/IMG_20210316_135646.jpg',
//       '../public/photos/IMG_20210316_135814.jpg',
//       '../public/photos/IMG_20210316_135934.jpg',
//       '../public/photos/IMG_20210316_135938.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210316_140453.jpg',
//       '../public/photos/IMG_20210316_140459.jpg',
//       '../public/photos/IMG_20210316_140504.jpg',
//       '../public/photos/IMG_20210316_140509.jpg',
//       '../public/photos/IMG_20210316_140516.jpg',
//       '../public/photos/IMG_20210316_140525.jpg',
//       '../public/photos/IMG_20210316_140528.jpg',
//       '../public/photos/IMG_20210316_140531.jpg',
//       '../public/photos/IMG_20210316_140547.jpg',
//       '../public/photos/IMG_20210316_140553.jpg',
//       '../public/photos/IMG_20210316_140609.jpg',
//       '../public/photos/IMG_20210316_140624.jpg',
//       '../public/photos/IMG_20210316_140639.jpg',
//       '../public/photos/IMG_20210316_140807.jpg',
//       '../public/photos/IMG_20210316_140813.jpg',
//       '../public/photos/IMG_20210316_140815.jpg',
//       '../public/photos/IMG_20210316_140816.jpg',
//       '../public/photos/IMG_20210316_141559.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210318-WA0000.jpg',
//       '../public/photos/IMG_20210318-WA0002.jpg',
//       '../public/photos/IMG_20210318_103802.jpg',
//       '../public/photos/IMG_20210318_122629.jpg',
//       '../public/photos/IMG_20210318_122631.jpg',
//       '../public/photos/IMG_20210318_125301.jpg',
//       '../public/photos/IMG_20210318_125306.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210320_171557.jpg',
//       '../public/photos/IMG_20210320_171608.jpg',
//       '../public/photos/IMG_20210320_171610.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210322_154655.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210323_141951.jpg',
//       '../public/photos/IMG_20210323_172820.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210324-WA0000.jpg',
//       '../public/photos/IMG_20210324_100516.jpg',
//       '../public/photos/IMG_20210324_100523.jpg',
//       '../public/photos/IMG_20210324_111401.jpg',
//       '../public/photos/IMG_20210324_163648.jpg',
//       '../public/photos/IMG_20210324_163716.jpg',
//       '../public/photos/IMG_20210324_164022.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210325_104835.jpg',
//       '../public/photos/IMG_20210325_104844.jpg',
//       '../public/photos/IMG_20210325_104903.jpg',
//       '../public/photos/IMG_20210325_104917.jpg',
//       '../public/photos/IMG_20210325_150308.jpg',
//       '../public/photos/IMG_20210325_152731.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210326_170319.jpg',
//       '../public/photos/IMG_20210326_170323.jpg',
//       '../public/photos/IMG_20210326_170332.jpg',
//       '../public/photos/IMG_20210326_170333.jpg',
//       '../public/photos/IMG_20210326_170336.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210328_141451.jpg',
//       '../public/photos/IMG_20210328_141457.jpg',
//       '../public/photos/IMG_20210328_141502.jpg',
//       '../public/photos/IMG_20210328_142845.jpg',
//       '../public/photos/IMG_20210328_142849.jpg',
//       '../public/photos/IMG_20210328_142859.jpg',
//       '../public/photos/IMG_20210328_142901.jpg',
//       '../public/photos/IMG_20210328_155652.jpg',
//       '../public/photos/IMG_20210328_155706.jpg',
//       '../public/photos/IMG_20210328_155710.jpg',
//       '../public/photos/IMG_20210328_155716.jpg',
//       '../public/photos/IMG_20210328_155722.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210329_142441.jpg',
//       '../public/photos/IMG_20210329_150612.jpg',
//       '../public/photos/IMG_20210329_150620.jpg',
//       '../public/photos/IMG_20210329_150624.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210331_125526.jpg',
//       '../public/photos/IMG_20210331_125533.jpg',
//       '../public/photos/IMG_20210331_125542.jpg',
//       '../public/photos/IMG_20210331_161527.jpg',
//       '../public/photos/IMG_20210331_161536.jpg',
//       '../public/photos/IMG_20210331_161539.jpg',
//       '../public/photos/IMG_20210331_161545.jpg',
//       '../public/photos/IMG_20210331_161547.jpg',
//       '../public/photos/IMG_20210331_161549.jpg',
//       '../public/photos/IMG_20210331_161550.jpg',
//       '../public/photos/IMG_20210331_161552.jpg',
//       '../public/photos/IMG_20210331_162153.jpg',
//       '../public/photos/IMG_20210331_162158.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210401_145034.jpg',
//       '../public/photos/IMG_20210401_145040.jpg',
//       '../public/photos/IMG_20210401_155552.jpg',
//       '../public/photos/IMG_20210401_155606.jpg',
//       '../public/photos/IMG_20210401_155619.jpg',
//       '../public/photos/IMG_20210401_155626.jpg',
//       '../public/photos/IMG_20210401_174713.jpg',
//       '../public/photos/IMG_20210401_174717.jpg',
//       '../public/photos/IMG_20210401_174724.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210402_122621.jpg',
//       '../public/photos/IMG_20210402_122628.jpg',
//       '../public/photos/IMG_20210402_150025.jpg',
//       '../public/photos/IMG_20210402_150035.jpg',
//       '../public/photos/IMG_20210402_150054.jpg',
//       '../public/photos/IMG_20210402_150057.jpg',
//       '../public/photos/IMG_20210402_150105.jpg',
//       '../public/photos/IMG_20210402_150111.jpg',
//       '../public/photos/IMG_20210402_150113.jpg',
//       '../public/photos/IMG_20210402_150114.jpg',
//       '../public/photos/IMG_20210402_150116.jpg',
//       '../public/photos/IMG_20210402_153220.jpg',
//       '../public/photos/IMG_20210402_153230.jpg',
//       '../public/photos/IMG_20210402_153236.jpg',
//       '../public/photos/IMG_20210402_153244.jpg',
//       '../public/photos/IMG_20210402_153245.jpg',
//       '../public/photos/IMG_20210402_153247.jpg',
//       '../public/photos/IMG_20210402_153249.jpg',
//       '../public/photos/IMG_20210402_153250.jpg',
//       '../public/photos/IMG_20210402_153252.jpg',
//       '../public/photos/IMG_20210402_153819.jpg',
//       '../public/photos/IMG_20210402_153823.jpg',
//       '../public/photos/IMG_20210402_153825.jpg',
//       '../public/photos/IMG_20210402_153831.jpg',
//       '../public/photos/IMG_20210402_153836.jpg',
//       '../public/photos/IMG_20210402_172352.jpg',
//       '../public/photos/IMG_20210402_172357.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210405_132208.jpg',
//       '../public/photos/IMG_20210405_132216.jpg',
//       '../public/photos/IMG_20210405_132218.jpg',
//       '../public/photos/IMG_20210405_132223.jpg',
//       '../public/photos/IMG_20210405_144343.jpg',
//       '../public/photos/IMG_20210405_144346.jpg',
//       '../public/photos/IMG_20210405_144350.jpg',
//       '../public/photos/IMG_20210405_144359.jpg',
//       '../public/photos/IMG_20210405_144400.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210406_174615.jpg',
//       '../public/photos/IMG_20210406_174628.jpg',
//       '../public/photos/IMG_20210406_174631.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210407-WA0002.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210408_125851.jpg',
//       '../public/photos/IMG_20210408_160003.jpg',
//       '../public/photos/IMG_20210408_160011.jpg',
//       '../public/photos/IMG_20210408_160017.jpg',
//       '../public/photos/IMG_20210408_160020.jpg',
//       '../public/photos/IMG_20210408_160025.jpg',
//       '../public/photos/IMG_20210408_160026.jpg',
//       '../public/photos/IMG_20210408_160031.jpg',
//       '../public/photos/IMG_20210408_160033.jpg',
//       '../public/photos/IMG_20210408_160036.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210414_132312.jpg',
//       '../public/photos/IMG_20210414_132320.jpg',
//       '../public/photos/IMG_20210414_132333.jpg',
//       '../public/photos/IMG_20210414_132335.jpg',
//       '../public/photos/IMG_20210414_132405.jpg',
//       '../public/photos/IMG_20210414_132418.jpg',
//       '../public/photos/IMG_20210414_135720.jpg',
//       '../public/photos/IMG_20210414_135728.jpg',
//       '../public/photos/IMG_20210414_135733.jpg',
//       '../public/photos/IMG_20210414_135737.jpg',
//       '../public/photos/IMG_20210414_135744.jpg',
//       '../public/photos/IMG_20210414_135746.jpg',
//       '../public/photos/IMG_20210414_135753.jpg',
//       '../public/photos/IMG_20210414_135759.jpg',
//       '../public/photos/IMG_20210414_135805.jpg',
//       '../public/photos/IMG_20210414_135809.jpg',
//       '../public/photos/IMG_20210414_135816.jpg',
//       '../public/photos/IMG_20210414_135820.jpg',
//       '../public/photos/IMG_20210414_144640.jpg',
//       '../public/photos/IMG_20210414_144645.jpg',
//       '../public/photos/IMG_20210414_144650.jpg',
//       '../public/photos/IMG_20210414_144658.jpg',
//       '../public/photos/IMG_20210414_144703.jpg',
//       '../public/photos/IMG_20210414_144709.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210415_152024.jpg',
//       '../public/photos/IMG_20210415_152034.jpg',
//       '../public/photos/IMG_20210415_152038.jpg',
//       '../public/photos/IMG_20210415_152045.jpg',
//       '../public/photos/IMG_20210415_152352.jpg',
//       '../public/photos/IMG_20210415_152355.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210418_115804.jpg',
//       '../public/photos/IMG_20210418_115809.jpg',
//       '../public/photos/IMG_20210418_115815.jpg',
//       '../public/photos/IMG_20210418_154553.jpg',
//       '../public/photos/IMG_20210418_154557.jpg',
//       '../public/photos/IMG_20210418_154559.jpg',
//       '../public/photos/IMG_20210418_154601.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210419_113014.jpg',
//       '../public/photos/IMG_20210419_113029.jpg',
//       '../public/photos/IMG_20210419_113036.jpg',
//       '../public/photos/IMG_20210419_113042.jpg',
//       '../public/photos/IMG_20210419_145221.jpg',
//       '../public/photos/IMG_20210419_145223.jpg',
//       '../public/photos/IMG_20210419_145229.jpg',
//       '../public/photos/IMG_20210419_145233.jpg',
//       '../public/photos/IMG_20210419_145238.jpg',
//       '../public/photos/IMG_20210419_145555.jpg',
//       '../public/photos/IMG_20210419_145559.jpg',
//       '../public/photos/IMG_20210419_145607.jpg',
//       '../public/photos/IMG_20210419_145611.jpg',
//       '../public/photos/IMG_20210419_145630.jpg',
//       '../public/photos/IMG_20210419_145636.jpg',
//       '../public/photos/IMG_20210419_145640.jpg',
//       '../public/photos/IMG_20210419_145645.jpg',
//       '../public/photos/IMG_20210419_145647.jpg',
//       '../public/photos/IMG_20210419_151730.jpg',
//       '../public/photos/IMG_20210419_151736.jpg',
//       '../public/photos/IMG_20210419_151738.jpg',
//       '../public/photos/IMG_20210419_151741.jpg',
//       '../public/photos/IMG_20210419_151751.jpg',
//       '../public/photos/IMG_20210419_155130.jpg',
//       '../public/photos/IMG_20210419_155135.jpg',
//       '../public/photos/IMG_20210419_155138.jpg',
//       '../public/photos/IMG_20210419_155146.jpg',
//       '../public/photos/IMG_20210419_155151.jpg',
//       '../public/photos/IMG_20210419_155419.jpg',
//       '../public/photos/IMG_20210419_155423.jpg',
//       '../public/photos/IMG_20210419_155429.jpg',
//       '../public/photos/IMG_20210419_155431.jpg',
//       '../public/photos/IMG_20210419_155434.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210420_151347.jpg',
//       '../public/photos/IMG_20210420_151355.jpg',
//       '../public/photos/IMG_20210420_160907.jpg',
//       '../public/photos/IMG_20210420_161435.jpg',
//       '../public/photos/IMG_20210420_161448.jpg',
//       '../public/photos/IMG_20210420_161452.jpg',
//       '../public/photos/IMG_20210420_163815.jpg',
//       '../public/photos/IMG_20210420_163820.jpg',
//       '../public/photos/IMG_20210420_163827.jpg',
//       '../public/photos/IMG_20210420_163834.jpg',
//       '../public/photos/IMG_20210420_163841.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210421_114138.jpg',
//       '../public/photos/IMG_20210421_114141.jpg',
//       '../public/photos/IMG_20210421_114503.jpg',
//       '../public/photos/IMG_20210421_114510.jpg',
//       '../public/photos/IMG_20210421_145148.jpg',
//       '../public/photos/IMG_20210421_145202.jpg',
//       '../public/photos/IMG_20210421_145206.jpg',
//       '../public/photos/IMG_20210421_145216.jpg',
//       '../public/photos/IMG_20210421_145529.jpg',
//       '../public/photos/IMG_20210421_145537.jpg',
//       '../public/photos/IMG_20210421_145543.jpg',
//       '../public/photos/IMG_20210421_145552.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210422_102716.jpg',
//       '../public/photos/IMG_20210422_105244.jpg',
//       '../public/photos/IMG_20210422_105247.jpg',
//       '../public/photos/IMG_20210422_115651.jpg',
//       '../public/photos/IMG_20210422_115654.jpg',
//       '../public/photos/IMG_20210422_115706.jpg',
//       '../public/photos/IMG_20210422_115722.jpg',
//       '../public/photos/IMG_20210422_115729.jpg',
//       '../public/photos/IMG_20210422_115733.jpg',
//       '../public/photos/IMG_20210422_151109.jpg',
//       '../public/photos/IMG_20210422_151125.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210502_170401.jpg',
//       '../public/photos/IMG_20210502_170420.jpg',
//       '../public/photos/IMG_20210502_172606.jpg',
//       '../public/photos/IMG_20210502_172616.jpg',
//       '../public/photos/IMG_20210502_172636.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210503_145639.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210508_150558.jpg',
//       '../public/photos/IMG_20210508_150559.jpg',
//       '../public/photos/IMG_20210508_150605.jpg',
//       '../public/photos/IMG_20210508_150606.jpg',
//       '../public/photos/IMG_20210508_150949.jpg',
//       '../public/photos/IMG_20210508_163708.jpg',
//       '../public/photos/IMG_20210508_163719.jpg',
//       '../public/photos/IMG_20210508_163721.jpg',
//       '../public/photos/IMG_20210508_163736.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210509_105345.jpg',
//       '../public/photos/IMG_20210509_105354.jpg',
//       '../public/photos/IMG_20210509_105404.jpg',
//       '../public/photos/IMG_20210509_113805.jpg',
//       '../public/photos/IMG_20210509_113812.jpg',
//       '../public/photos/IMG_20210509_142511.jpg',
//       '../public/photos/IMG_20210509_142514.jpg',
//       '../public/photos/IMG_20210509_142524.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210512_140452.jpg',
//       '../public/photos/IMG_20210512_140501.jpg',
//       '../public/photos/IMG_20210512_140503.jpg',
//       '../public/photos/IMG_20210512_143927.jpg',
//       '../public/photos/IMG_20210512_155302.jpg',
//       '../public/photos/IMG_20210512_155306.jpg',
//       '../public/photos/IMG_20210512_155316.jpg',
//       '../public/photos/IMG_20210512_155323.jpg',
//       '../public/photos/IMG_20210512_155349.jpg',
//       '../public/photos/IMG_20210512_155511.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210607_145036.jpg',
//       '../public/photos/IMG_20210607_145041.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210609_155909.jpg',
//       '../public/photos/IMG_20210609_155911.jpg',
//       '../public/photos/IMG_20210609_155916.jpg',
//       '../public/photos/IMG_20210609_155920.jpg',
//       '../public/photos/IMG_20210609_155940.jpg',
//     ]
//   },
//   {
//     date: 2021,
//     title: '',
//     description: '',
//     filenames: [
//       '../public/photos/IMG_20210610_145822.jpg',
//     ]
//   }
]

export default function Gallery() {
  return (
    <div className={styles.gallery_container}>
      {galleryData.map((gallery) => (
        <div className={styles.gallery_div}>
          {/* <h2>{gallery.date}</h2>
          <h3>{gallery.title}</h3>
          <p>{gallery.description}</p> */}
          <div>
            {gallery.filenames.map(src => {
              return (               
                <div><Image src={src} alt="Sea Mist" loading="lazy" placeholder="blur" /></div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
