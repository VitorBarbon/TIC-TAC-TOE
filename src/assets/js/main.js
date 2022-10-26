class TicTaeToe {
  constructor() {
    this.fields = document.querySelectorAll('.box');
    this.toggle = false;
    this.winner = { msg: '', scoreCircle: 0, scoreX: 0 };
    this.count = 0;
    this.xPosition = [];
    this.circlePosition = [];
  }

  startGame () {
    this.addEvent();
  }

  addEvent() {
    this.fields.forEach((box) => box.addEventListener('click', () => {

      if(box.classList.contains('circle') || box.classList.contains('no_circle')) return;

      if(this.toggle) {
        box.style.backgroundColor = '#000000';
        box.classList.add('circle');
        this.circlePosition.push(box.id.replace('box-', ''));
      }

      if(!this.toggle) {
        box.style.backgroundColor ='red';
        box.classList.add('no_circle');
        this.xPosition.push(box.id.replace('box-', ''));
      }

      if(this.valid()) return;
      this.toggle = !this.toggle;
      this.count++

      if(this.count === 9) return this.result();

    }));
  }

  valid() {
    const circle = this.circlePosition.sort().toString().replaceAll(',' , '');
    const x = this.xPosition.sort().toString().replaceAll(',' , '');

    //x valiation
    if(x.indexOf('123') !== -1) return this.result(this.toggle);
    if(x.indexOf('456') !== -1) return this.result(this.toggle);
    if(x.indexOf('789') !== -1) return this.result(this.toggle);
    if(x.indexOf('1') !== -1 && x.indexOf('4') !== -1 && x.indexOf('7') !== -1) return this.result(this.toggle);
    if(x.indexOf('2') !== -1 && x.indexOf('5') !== -1 && x.indexOf('8') !== -1) return this.result(this.toggle);
    if(x.indexOf('3') !== -1 && x.indexOf('6') !== -1 && x.indexOf('9') !== -1) return this.result(this.toggle);
    if(x.indexOf('1') !== -1 && x.indexOf('5') !== -1 && x.indexOf('9') !== -1) return this.result(this.toggle);
    if(x.indexOf('3') !== -1 && x.indexOf('5') !== -1 && x.indexOf('7') !== -1) return this.result(this.toggle);

    //circle validation
    if(circle.indexOf('123') !== -1) return this.result(this.toggle);
    if(circle.indexOf('456') !== -1) return this.result(this.toggle);
    if(circle.indexOf('789') !== -1) return this.result(this.toggle);
    if(circle.indexOf('1') !== -1 && circle.indexOf('4') !== -1 && circle.indexOf('7') !== -1) return this.result(this.toggle);
    if(circle.indexOf('2') !== -1 && circle.indexOf('5') !== -1 && circle.indexOf('8') !== -1) return this.result(this.toggle);
    if(circle.indexOf('3') !== -1 && circle.indexOf('6') !== -1 && circle.indexOf('9') !== -1) return this.result(this.toggle);
    if(circle.indexOf('1') !== -1 && circle.indexOf('5') !== -1 && circle.indexOf('9') !== -1) return this.result(this.toggle);
    if(circle.indexOf('3') !== -1 && circle.indexOf('5') !== -1 && circle.indexOf('7') !== -1) return this.result(this.toggle);

    return false;
  }

  result(bol) {
    this.winner.msg = 'Draw';

    if(bol === true) {
      this.winner.msg = 'Circle win';
      this.winner.scoreCircle++;
    }

    if(bol === false) {
      this.winner.msg = 'X win';
      this.winner.scoreX++;
    }


    this.addEvent();

    const divResult = document.querySelector('.result');
    const divScore = document.querySelector('.score');
    divResult.innerText = this.winner.msg;
    divScore.innerText = `${this.winner.scoreCircle} : ${this.winner.scoreX}`;
    return true;
  };
}

const game = new TicTaeToe();
game.startGame();


