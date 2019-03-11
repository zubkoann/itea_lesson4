/*
  Composition:

  Задание при помощи композиции создать объекты 4х типов:

  functions:
    - MakeBackendMagic
    - MakeFrontendMagic
    - MakeItLooksBeautiful
    - DistributeTasks
    - DrinkSomeTea
    - WatchYoutube
    - Procrastinate

  BackendDeveloper = MakeBackendMagic + DrinkSomeTea + Procrastinate
  FrontendDeveloper = MakeFrontendMagic + DrinkSomeTea + WatchYoutube
  Designer = MakeItLooksBeautiful + WatchYoutube + Procrastinate
  ProjectManager = DistributeTasks + Procrastinate + DrinkSomeTea

  ProjectManager(name,gender,age) => { name, gender, age, type: 'project'}

*/
  const MakeBackendMagic = (state) => ({
    makeBackendMagic: (typework) => {
      state.typework = typework;
      console.log('Make Backend Magic - ' + state.typework)
    }
  });
  const MakeFrontendMagic = (state) => ({
    makeFrontendMagic: (typework) => {
      state.typework = typework;
      console.log('Make Frontend Magic - ' + state.typework);
    }
  });
  const MakeItLooksBeautiful = (state) => ({
    makeItLooksBeautiful: (typework) => {
      state.typework = typework;
      console.log('Make something Looks Beautiful - ' + state.typework);
    }
  });
  const DistributeTasks = (state) => ({
    distributeTasks: (task) => {
      state.task = task;
      console.log('Distribute Tasks - ' + state.task);
    }
  });
  const DrinkSomeTea = (state) => ({
    drinkSomeTea: (teaname) => {
      state.teaname = teaname;
      console.log('new teaname -' + state.teaname);
    }
  });
  const WatchYoutube = (state) => ({
    watchYoutube: (videoname) => {
      state.videoname = videoname;
      console.log('Watch Youtube -' + state.videoname);
    }
  });
  const Procrastinate = (state) => ({
    procrastinate: (procrasttime) => {
      state.procrasttime = procrasttime;
      console.log('Procrastinate -' + state.procrasttime);
    }
  })
  const LoggerIn = obj => ({
    logger: () => {
      console.log(obj);
    }
  });


  export const BackendDeveloper = (typework, teaname, procrasttime) => {
    let state = {
      typework,
      teaname,
      procrasttime
    }

    return Object.assign(
        {},
        MakeBackendMagic(state),
        DrinkSomeTea(state),
        Procrastinate(state),
        LoggerIn(state)
    );
  }
  // Test
  // const backendDeveloper = BackendDeveloper('BackendDeveloper do backend work', 'ahmadTea', 'prostrastinate 10min');
  // backendDeveloper.drinkSomeTea('drink ceylon tea for BackendDeveloper do backend work');
  // backendDeveloper.makeBackendMagic('change backendmagic');
  // backendDeveloper.procrastinate('20min');
  // backendDeveloper.logger();


  export const FrontendDeveloper = (typework, teaname, videoname) => {
    let state = {
      typework,
      teaname,
      videoname
    }

    return Object.assign(
        {},
        MakeFrontendMagic(state),
        DrinkSomeTea(state),
        WatchYoutube(state),
        LoggerIn(state)
    );
  }
  // Test
  // const frontendDeveloper = FrontendDeveloper('FrontendDeveloper do front work', 'mytea', 'detective film');
  // frontendDeveloper.makeFrontendMagic('chande makeFrontendMagic2');
  // frontendDeveloper.drinkSomeTea('drink some spetial tea for FrontendDeveloper ');
  // frontendDeveloper.watchYoutube('new name of film');
  // frontendDeveloper.logger();

  export const Designer = (typework, videoname, procrasttime) => {
    let state = {
      typework,
      videoname,
      procrasttime
    }
    return Object.assign(
        {},
        MakeItLooksBeautiful(state),
        WatchYoutube(state),
        Procrastinate(state),
        LoggerIn(state)
    )
  }
  // Test
  // const designer = Designer('new designer make me good webdesign', 'design video', 'new design prostrastinate 10 mpnth');
  // designer.logger();
  // designer.makeItLooksBeautiful('make new better design');
  // designer.watchYoutube('video about design');
  // designer.procrastinate('new design prostrastinate 1year');
  // designer.logger();

  export const ProjectManager =(task, procrasttime,teaname )=>{
    let state={
      task,
      procrasttime,
      teaname
    }
    return Object.assign(
        {},
        DistributeTasks(state),
        Procrastinate(state),
        DrinkSomeTea(state),
        LoggerIn(state)
    )
  }
  // Test
  // const projectManager = ProjectManager('ProjectManager task', '1day', 'drink some tasty tea for ProjectManager');
  // projectManager.logger();










