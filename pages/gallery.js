import styles from '../styles/Home.module.css'
import Image from 'next/image'

const galleryData = [
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210213_091130.jpg',
      'IMG_20210214_120837.jpg',
      'IMG_20210215-WA0005.jpg',
      'IMG_20210215_123937.jpg',
      'IMG_20210215_123944.jpg',
      'IMG_20210215_123949.jpg',
      'IMG_20210215_123959.jpg',
      'IMG_20210215_124922.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210217_104355.jpg',
      'IMG_20210217_104403.jpg',
      'IMG_20210217_104406.jpg',
      'IMG_20210217_104415.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210218_121936.jpg',
      'IMG_20210218_121941.jpg',
      'IMG_20210218_121949.jpg',
      'IMG_20210218_121953.jpg',
      'IMG_20210218_121957.jpg',
      'IMG_20210218_122000.jpg',
      'IMG_20210218_131730.jpg',
      'IMG_20210218_135355.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210219_120532.jpg',
      'IMG_20210219_120538.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210222_171300.jpg',
      'IMG_20210222_171303.jpg',
      'IMG_20210222_171309.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210224_081621.jpg',
      'IMG_20210224_081626.jpg',
      'IMG_20210224_081651.jpg',
      'IMG_20210224_174415.jpg',
      'IMG_20210224_174418.jpg',
      'IMG_20210224_174437.jpg',
      'IMG_20210224_174439.jpg',
      'IMG_20210224_174440.jpg',
      'IMG_20210224_174441.jpg',
      'IMG_20210224_174443.jpg',
      'IMG_20210224_174444.jpg',
      'IMG_20210224_174446.jpg',
      'IMG_20210224_174447.jpg',
      'IMG_20210224_174451.jpg',
      'IMG_20210224_174452.jpg',
      'IMG_20210224_174453.jpg',
      'IMG_20210224_174454.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210225_030407.jpg',
      'IMG_20210225_030940.jpg',
      'IMG_20210225_063959.jpg',
      'IMG_20210225_102246.jpg',
      'IMG_20210225_102307.jpg',
      'IMG_20210225_102332.jpg',
      'IMG_20210225_102334.jpg',
      'IMG_20210225_120941.jpg',
      'IMG_20210225_143623.jpg',
      'IMG_20210225_143627.jpg',
      'IMG_20210225_154615.jpg',
      'IMG_20210225_154621.jpg',
      'IMG_20210225_154622.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210226_070108.jpg',
      'IMG_20210226_104404.jpg',
      'IMG_20210226_125756.jpg',
      'IMG_20210226_125809.jpg',
      'IMG_20210226_125821.jpg',
      'IMG_20210226_131202.jpg',
      'IMG_20210226_131203.jpg',
      'IMG_20210226_140739.jpg',
      'IMG_20210226_140746.jpg',
      'IMG_20210226_140750.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210303_123417.jpg',
      'IMG_20210303_123419.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210305-WA0001.jpg',
      'IMG_20210305_071827.jpg',
      'IMG_20210305_191931.jpg',
      'IMG_20210305_191945.jpg',
      'IMG_20210305_191952.jpg',
      'IMG_20210305_192005.jpg',
      'IMG_20210305_194131.jpg',
      'IMG_20210305_200458.jpg',
      'IMG_20210305_200509.jpg',
      'IMG_20210305_200514.jpg',
      'IMG_20210305_200520.jpg',
      'IMG_20210305_200527.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210307_062905.jpg',
      'IMG_20210307_062913.jpg',
      'IMG_20210307_062916.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210308_065835.jpg',
      'IMG_20210308_065848.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210311_085542.jpg',
      'IMG_20210311_085711.jpg',
      'IMG_20210311_085716.jpg',
      'IMG_20210311_085723.jpg',
      'IMG_20210311_085727.jpg',
      'IMG_20210311_085749.jpg',
      'IMG_20210311_085757.jpg',
      'IMG_20210311_085812.jpg',
      'IMG_20210311_085816.jpg',
      'IMG_20210311_085821.jpg',
      'IMG_20210311_085824.jpg',
      'IMG_20210311_090718.jpg',
      'IMG_20210311_090727.jpg',
      'IMG_20210311_090743.jpg',
      'IMG_20210311_090751.jpg',
      'IMG_20210311_090756.jpg',
      'IMG_20210311_090801.jpg',
      'IMG_20210311_090812.jpg',
      'IMG_20210311_090816.jpg',
      'IMG_20210311_090821.jpg',
      'IMG_20210311_090859.jpg',
      'IMG_20210311_090902.jpg',
      'IMG_20210311_090907.jpg',
      'IMG_20210311_090922.jpg',
      'IMG_20210311_090936.jpg',
      'IMG_20210311_090938.jpg',
      'IMG_20210311_090945.jpg',
      'IMG_20210311_102332.jpg',
      'IMG_20210311_102749.jpg',
      'IMG_20210311_102751.jpg',
      'IMG_20210311_103922.jpg',
      'IMG_20210311_103925.jpg',
      'IMG_20210311_103928.jpg',
      'IMG_20210311_135602.jpg',
      'IMG_20210311_135604.jpg',
      'IMG_20210311_135608.jpg',
      'IMG_20210311_140614.jpg',
      'IMG_20210311_141127.jpg',
      'IMG_20210311_141131.jpg',
      'IMG_20210311_141136.jpg',
      'IMG_20210311_142200.jpg',
      'IMG_20210311_142208.jpg',
      'IMG_20210311_143958.jpg',
      'IMG_20210311_144004.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210312_110433.jpg',
      'IMG_20210312_110440.jpg',
      'IMG_20210312_110449.jpg',
      'IMG_20210312_110457.jpg',
      'IMG_20210312_110511.jpg',
      'IMG_20210312_110537.jpg',
      'IMG_20210312_113243.jpg',
      'IMG_20210312_113257.jpg',
      'IMG_20210312_113304.jpg',
      'IMG_20210312_113310.jpg',
      'IMG_20210312_113314.jpg',
      'IMG_20210312_120536.jpg',
      'IMG_20210312_130251.jpg',
      'IMG_20210312_130539.jpg',
      'IMG_20210312_130550.jpg',
      'IMG_20210312_130610.jpg',
      'IMG_20210312_130614.jpg',
      'IMG_20210312_132931.jpg',
      'IMG_20210312_141428.jpg',
      'IMG_20210312_141434.jpg',
      'IMG_20210312_141533.jpg',
      'IMG_20210312_141539.jpg',
      'IMG_20210312_141550.jpg',
      'IMG_20210312_151541.jpg',
      'IMG_20210312_151655.jpg',
      'IMG_20210312_152851.jpg',
      'IMG_20210312_152856.jpg',
      'IMG_20210312_163731.jpg',
      'IMG_20210312_171445.jpg',
      'IMG_20210312_171447.jpg',
      'IMG_20210312_171459.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210313_105338.jpg',
      'IMG_20210313_113143.jpg',
      'IMG_20210313_113152.jpg',
      'IMG_20210313_113155.jpg',
      'IMG_20210313_113159.jpg',
      'IMG_20210313_113203.jpg',
      'IMG_20210313_113206.jpg',
      'IMG_20210313_123126.jpg',
      'IMG_20210313_123132.jpg',
      'IMG_20210313_123133.jpg',
      'IMG_20210313_130922.jpg',
      'IMG_20210313_130933.jpg',
      'IMG_20210313_142403.jpg',
      'IMG_20210313_142747.jpg',
      'IMG_20210313_160558.jpg',
      'IMG_20210313_160917.jpg',
      'IMG_20210313_160922.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210314_115742.jpg',
      'IMG_20210314_115746.jpg',
      'IMG_20210314_125846.jpg',
      'IMG_20210314_125850.jpg',
      'IMG_20210314_125854.jpg',
      'IMG_20210314_140139.jpg',
      'IMG_20210314_140142.jpg',
      'IMG_20210314_140147.jpg',
      'IMG_20210314_144913.jpg',
      'IMG_20210314_144920.jpg',
      'IMG_20210314_145024.jpg',
      'IMG_20210314_145029.jpg',
      'IMG_20210314_145734.jpg',
      'IMG_20210314_153850.jpg',
      'IMG_20210314_153857.jpg',
      'IMG_20210314_153901.jpg',
      'IMG_20210314_153907.jpg',
      'IMG_20210314_153914.jpg',
      'IMG_20210314_153918.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210316_122030.jpg',
      'IMG_20210316_123653.jpg',
      'IMG_20210316_124144.jpg',
      'IMG_20210316_124848.jpg',
      'IMG_20210316_124952.jpg',
      'IMG_20210316_124958.jpg',
      'IMG_20210316_125015.jpg',
      'IMG_20210316_125017.jpg',
      'IMG_20210316_125019.jpg',
      'IMG_20210316_125850.jpg',
      'IMG_20210316_125910.jpg',
      'IMG_20210316_131638.jpg',
      'IMG_20210316_131644.jpg',
      'IMG_20210316_131654.jpg',
      'IMG_20210316_132230.jpg',
      'IMG_20210316_132335.jpg',
      'IMG_20210316_133045.jpg',
      'IMG_20210316_133048.jpg',
      'IMG_20210316_133055.jpg',
      'IMG_20210316_133057.jpg',
      'IMG_20210316_133339.jpg',
      'IMG_20210316_133345.jpg',
      'IMG_20210316_134143.jpg',
      'IMG_20210316_134801.jpg',
      'IMG_20210316_134809.jpg',
      'IMG_20210316_135545.jpg',
      'IMG_20210316_135551.jpg',
      'IMG_20210316_135641.jpg',
      'IMG_20210316_135646.jpg',
      'IMG_20210316_135814.jpg',
      'IMG_20210316_135934.jpg',
      'IMG_20210316_135938.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210316_140453.jpg',
      'IMG_20210316_140459.jpg',
      'IMG_20210316_140504.jpg',
      'IMG_20210316_140509.jpg',
      'IMG_20210316_140516.jpg',
      'IMG_20210316_140525.jpg',
      'IMG_20210316_140528.jpg',
      'IMG_20210316_140531.jpg',
      'IMG_20210316_140547.jpg',
      'IMG_20210316_140553.jpg',
      'IMG_20210316_140609.jpg',
      'IMG_20210316_140624.jpg',
      'IMG_20210316_140639.jpg',
      'IMG_20210316_140807.jpg',
      'IMG_20210316_140813.jpg',
      'IMG_20210316_140815.jpg',
      'IMG_20210316_140816.jpg',
      'IMG_20210316_141559.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210318-WA0000.jpg',
      'IMG_20210318-WA0002.jpg',
      'IMG_20210318_103802.jpg',
      'IMG_20210318_122629.jpg',
      'IMG_20210318_122631.jpg',
      'IMG_20210318_125301.jpg',
      'IMG_20210318_125306.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210320_171557.jpg',
      'IMG_20210320_171608.jpg',
      'IMG_20210320_171610.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210322_154655.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210323_141951.jpg',
      'IMG_20210323_172820.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210324-WA0000.jpg',
      'IMG_20210324_100516.jpg',
      'IMG_20210324_100523.jpg',
      'IMG_20210324_111401.jpg',
      'IMG_20210324_163648.jpg',
      'IMG_20210324_163716.jpg',
      'IMG_20210324_164022.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210325_104835.jpg',
      'IMG_20210325_104844.jpg',
      'IMG_20210325_104903.jpg',
      'IMG_20210325_104917.jpg',
      'IMG_20210325_150308.jpg',
      'IMG_20210325_152731.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210326_170319.jpg',
      'IMG_20210326_170323.jpg',
      'IMG_20210326_170332.jpg',
      'IMG_20210326_170333.jpg',
      'IMG_20210326_170336.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210328_141451.jpg',
      'IMG_20210328_141457.jpg',
      'IMG_20210328_141502.jpg',
      'IMG_20210328_142845.jpg',
      'IMG_20210328_142849.jpg',
      'IMG_20210328_142859.jpg',
      'IMG_20210328_142901.jpg',
      'IMG_20210328_155652.jpg',
      'IMG_20210328_155706.jpg',
      'IMG_20210328_155710.jpg',
      'IMG_20210328_155716.jpg',
      'IMG_20210328_155722.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210329_142441.jpg',
      'IMG_20210329_150612.jpg',
      'IMG_20210329_150620.jpg',
      'IMG_20210329_150624.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210331_125526.jpg',
      'IMG_20210331_125533.jpg',
      'IMG_20210331_125542.jpg',
      'IMG_20210331_161527.jpg',
      'IMG_20210331_161536.jpg',
      'IMG_20210331_161539.jpg',
      'IMG_20210331_161545.jpg',
      'IMG_20210331_161547.jpg',
      'IMG_20210331_161549.jpg',
      'IMG_20210331_161550.jpg',
      'IMG_20210331_161552.jpg',
      'IMG_20210331_162153.jpg',
      'IMG_20210331_162158.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210401_145034.jpg',
      'IMG_20210401_145040.jpg',
      'IMG_20210401_155552.jpg',
      'IMG_20210401_155606.jpg',
      'IMG_20210401_155619.jpg',
      'IMG_20210401_155626.jpg',
      'IMG_20210401_174713.jpg',
      'IMG_20210401_174717.jpg',
      'IMG_20210401_174724.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210402_122621.jpg',
      'IMG_20210402_122628.jpg',
      'IMG_20210402_150025.jpg',
      'IMG_20210402_150035.jpg',
      'IMG_20210402_150054.jpg',
      'IMG_20210402_150057.jpg',
      'IMG_20210402_150105.jpg',
      'IMG_20210402_150111.jpg',
      'IMG_20210402_150113.jpg',
      'IMG_20210402_150114.jpg',
      'IMG_20210402_150116.jpg',
      'IMG_20210402_153220.jpg',
      'IMG_20210402_153230.jpg',
      'IMG_20210402_153236.jpg',
      'IMG_20210402_153244.jpg',
      'IMG_20210402_153245.jpg',
      'IMG_20210402_153247.jpg',
      'IMG_20210402_153249.jpg',
      'IMG_20210402_153250.jpg',
      'IMG_20210402_153252.jpg',
      'IMG_20210402_153819.jpg',
      'IMG_20210402_153823.jpg',
      'IMG_20210402_153825.jpg',
      'IMG_20210402_153831.jpg',
      'IMG_20210402_153836.jpg',
      'IMG_20210402_172352.jpg',
      'IMG_20210402_172357.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210405_132208.jpg',
      'IMG_20210405_132216.jpg',
      'IMG_20210405_132218.jpg',
      'IMG_20210405_132223.jpg',
      'IMG_20210405_144343.jpg',
      'IMG_20210405_144346.jpg',
      'IMG_20210405_144350.jpg',
      'IMG_20210405_144359.jpg',
      'IMG_20210405_144400.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210406_174615.jpg',
      'IMG_20210406_174628.jpg',
      'IMG_20210406_174631.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210407-WA0002.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210408_125851.jpg',
      'IMG_20210408_160003.jpg',
      'IMG_20210408_160011.jpg',
      'IMG_20210408_160017.jpg',
      'IMG_20210408_160020.jpg',
      'IMG_20210408_160025.jpg',
      'IMG_20210408_160026.jpg',
      'IMG_20210408_160031.jpg',
      'IMG_20210408_160033.jpg',
      'IMG_20210408_160036.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210414_132312.jpg',
      'IMG_20210414_132320.jpg',
      'IMG_20210414_132333.jpg',
      'IMG_20210414_132335.jpg',
      'IMG_20210414_132405.jpg',
      'IMG_20210414_132418.jpg',
      'IMG_20210414_135720.jpg',
      'IMG_20210414_135728.jpg',
      'IMG_20210414_135733.jpg',
      'IMG_20210414_135737.jpg',
      'IMG_20210414_135744.jpg',
      'IMG_20210414_135746.jpg',
      'IMG_20210414_135753.jpg',
      'IMG_20210414_135759.jpg',
      'IMG_20210414_135805.jpg',
      'IMG_20210414_135809.jpg',
      'IMG_20210414_135816.jpg',
      'IMG_20210414_135820.jpg',
      'IMG_20210414_144640.jpg',
      'IMG_20210414_144645.jpg',
      'IMG_20210414_144650.jpg',
      'IMG_20210414_144658.jpg',
      'IMG_20210414_144703.jpg',
      'IMG_20210414_144709.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210415_152024.jpg',
      'IMG_20210415_152034.jpg',
      'IMG_20210415_152038.jpg',
      'IMG_20210415_152045.jpg',
      'IMG_20210415_152352.jpg',
      'IMG_20210415_152355.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210418_115804.jpg',
      'IMG_20210418_115809.jpg',
      'IMG_20210418_115815.jpg',
      'IMG_20210418_154553.jpg',
      'IMG_20210418_154557.jpg',
      'IMG_20210418_154559.jpg',
      'IMG_20210418_154601.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210419_113014.jpg',
      'IMG_20210419_113029.jpg',
      'IMG_20210419_113036.jpg',
      'IMG_20210419_113042.jpg',
      'IMG_20210419_145221.jpg',
      'IMG_20210419_145223.jpg',
      'IMG_20210419_145229.jpg',
      'IMG_20210419_145233.jpg',
      'IMG_20210419_145238.jpg',
      'IMG_20210419_145555.jpg',
      'IMG_20210419_145559.jpg',
      'IMG_20210419_145607.jpg',
      'IMG_20210419_145611.jpg',
      'IMG_20210419_145630.jpg',
      'IMG_20210419_145636.jpg',
      'IMG_20210419_145640.jpg',
      'IMG_20210419_145645.jpg',
      'IMG_20210419_145647.jpg',
      'IMG_20210419_151730.jpg',
      'IMG_20210419_151736.jpg',
      'IMG_20210419_151738.jpg',
      'IMG_20210419_151741.jpg',
      'IMG_20210419_151751.jpg',
      'IMG_20210419_155130.jpg',
      'IMG_20210419_155135.jpg',
      'IMG_20210419_155138.jpg',
      'IMG_20210419_155146.jpg',
      'IMG_20210419_155151.jpg',
      'IMG_20210419_155419.jpg',
      'IMG_20210419_155423.jpg',
      'IMG_20210419_155429.jpg',
      'IMG_20210419_155431.jpg',
      'IMG_20210419_155434.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210420_151347.jpg',
      'IMG_20210420_151355.jpg',
      'IMG_20210420_160907.jpg',
      'IMG_20210420_161435.jpg',
      'IMG_20210420_161448.jpg',
      'IMG_20210420_161452.jpg',
      'IMG_20210420_163815.jpg',
      'IMG_20210420_163820.jpg',
      'IMG_20210420_163827.jpg',
      'IMG_20210420_163834.jpg',
      'IMG_20210420_163841.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210421_114138.jpg',
      'IMG_20210421_114141.jpg',
      'IMG_20210421_114503.jpg',
      'IMG_20210421_114510.jpg',
      'IMG_20210421_145148.jpg',
      'IMG_20210421_145202.jpg',
      'IMG_20210421_145206.jpg',
      'IMG_20210421_145216.jpg',
      'IMG_20210421_145529.jpg',
      'IMG_20210421_145537.jpg',
      'IMG_20210421_145543.jpg',
      'IMG_20210421_145552.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210422_102716.jpg',
      'IMG_20210422_105244.jpg',
      'IMG_20210422_105247.jpg',
      'IMG_20210422_115651.jpg',
      'IMG_20210422_115654.jpg',
      'IMG_20210422_115706.jpg',
      'IMG_20210422_115722.jpg',
      'IMG_20210422_115729.jpg',
      'IMG_20210422_115733.jpg',
      'IMG_20210422_151109.jpg',
      'IMG_20210422_151125.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210502_170401.jpg',
      'IMG_20210502_170420.jpg',
      'IMG_20210502_172606.jpg',
      'IMG_20210502_172616.jpg',
      'IMG_20210502_172636.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210503_145639.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210508_150558.jpg',
      'IMG_20210508_150559.jpg',
      'IMG_20210508_150605.jpg',
      'IMG_20210508_150606.jpg',
      'IMG_20210508_150949.jpg',
      'IMG_20210508_163708.jpg',
      'IMG_20210508_163719.jpg',
      'IMG_20210508_163721.jpg',
      'IMG_20210508_163736.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210509_105345.jpg',
      'IMG_20210509_105354.jpg',
      'IMG_20210509_105404.jpg',
      'IMG_20210509_113805.jpg',
      'IMG_20210509_113812.jpg',
      'IMG_20210509_142511.jpg',
      'IMG_20210509_142514.jpg',
      'IMG_20210509_142524.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210512_140452.jpg',
      'IMG_20210512_140501.jpg',
      'IMG_20210512_140503.jpg',
      'IMG_20210512_143927.jpg',
      'IMG_20210512_155302.jpg',
      'IMG_20210512_155306.jpg',
      'IMG_20210512_155316.jpg',
      'IMG_20210512_155323.jpg',
      'IMG_20210512_155349.jpg',
      'IMG_20210512_155511.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210607_145036.jpg',
      'IMG_20210607_145041.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210609_155909.jpg',
      'IMG_20210609_155911.jpg',
      'IMG_20210609_155916.jpg',
      'IMG_20210609_155920.jpg',
      'IMG_20210609_155940.jpg',
    ]
  },
  {
    date: 2021,
    title: '',
    description: '',
    filenames: [
      'IMG_20210610_145822.jpg',
    ]
  }
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
            {gallery.filenames.map(filename => {
              const src = `/photos/${filename}`
              return (
                <Image
                  alt="Sea Mist"
                  src={src}
                  layout="responsive"
                  width={700}
                  height={475}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
