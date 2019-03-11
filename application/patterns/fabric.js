  /*

      Сегодня разберем некоторые паттерны проектирования JS приложений.

      Разберем паттерн "Фабрика" и то как он работает в JS.

  */
  const Fabric = () => {

    class Weapon{
      render(){
        const root = document.getElementById('root');
        const classMagic = this.magic ? 'magic' : 'regular';
        root.innerHTML += `
          <div class="${classMagic}">
            <h2>${this.name}</h2>
            <span>${this.material}</span>
            <div class="icon">
              <img src="${this.icon}" width="100" height="100"/>
            </div>
          </div>
        `;
      }
    }
    class Sword extends Weapon{
      constructor({name, material = 'steel', magic}){
        super();
        this.weaponType = 'sword';
        this.name = name || 'Unnamed sword';
        this.material = material;
        this.magic = magic !== undefined ? magic : false;
        this.icon = 'images/swords.svg';
      }
    }

    class Bow extends Weapon{
      constructor({name, material, style, magic}){
        super();
        this.weaponType = 'bow';
        this.name = name || 'Unnamed bow';
        this.material = material || 'Wood';
        this.magic = magic !== undefined ? magic : false;
        this.icon = 'images/archery.svg';
      }
    }

    class WeaponFactory {
      makeWeapon( weapon ){
        let WeaponClass = null;
        if( weapon.weaponType === 'sword'){
          WeaponClass = Sword;
        } else if( weapon.weaponType === 'bow'){
          WeaponClass = Bow;
        } else {
          return false;
        }
        return new WeaponClass( weapon );
      }
    }

    const mySuperForge = new WeaponFactory();

    const MakeMeBlade = mySuperForge.makeWeapon({
      weaponType: 'sword',
      name: 'winner',
      metal: 'dark iron',
      magic: true
    })
    const MakeMeBlade2 = mySuperForge.makeWeapon({
      weaponType: 'sword',
      name: 'defender',
      metal: 'dark iron',
      magic: false
    })
    const MakeMeBow = mySuperForge.makeWeapon({
      weaponType: 'bow',
      name: 'defender',
      metal: 'dark iron',
      magic: true
    })

    console.log( MakeMeBlade, MakeMeBlade2, MakeMeBow);
    MakeMeBlade.render();
    MakeMeBlade2.render();
    MakeMeBow.render();

  }


  export default Fabric;
