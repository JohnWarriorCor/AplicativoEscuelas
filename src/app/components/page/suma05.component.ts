import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var particlesJS: any;

@Component({
  selector: 'app-suma05',
  templateUrl: './suma05.component.html',
  styleUrls: ['./suma05.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Suma05Component implements OnInit {
closeResult: string;
numero = 0;
env;
nu = '';
nu1 = '/uno.png' ;
nu2 = '/dos.png';
nu3 = '/tres.png';
nu4 = '/cuatro.png';
nu5 = '/cinco.png';
nu6 = '/seis.png';
nu7 = '/siete.png';
nu8 = '/ocho.png';
nu9 = '/nueve.png';
nu10 = '/diez.png';
imagen = '';
imagen2 = '';
imagenr = 'assets/res.png';
num1 = (Math.floor(Math.random() * 5) + 1);
num2 = (Math.floor(Math.random() * 5) + 1);
imag =  Math.floor(Math.random() * 3) ;
res = 0;
resu: number;
comodin: number;
constructor(private modalService: NgbModal) { }
snd = new Audio('assets/resta1.mp3'); // buffers automatically when created
ngOnInit() {
  particlesJS.load('particles-js', 'assets/data/particles.json', null);
  // this.snd.play();
  this.azar();

  if ( this.imag === 0 ) {
      this.nu = 'apple';
      if (this.num1 === 1 && this.num2 === 1) {
        this.imagen = 'assets/apple/uno.png';
        this.imagen2 = 'assets/apple/uno.png';
        return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 2 && this.num2 === 2) {
          this.imagen = 'assets/apple/dos.png';
          this.imagen2 = 'assets/apple/dos.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 3 && this.num2 === 3) {
          this.imagen = 'assets/apple/tres.png';
          this.imagen2 = 'assets/apple/tres.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 4) {
          this.imagen = 'assets/apple/cuatro.png';
          this.imagen2 = 'assets/apple/cuatro.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 5) {
          this.imagen = 'assets/apple/cinco.png';
          this.imagen2 = 'assets/apple/cinco.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 2 && this.num2 === 1) {
          this.imagen = 'assets/apple/dos.png';
          this.imagen2 = 'assets/apple/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 3 && this.num2 === 1) {
          this.imagen = 'assets/apple/tres.png';
          this.imagen2 = 'assets/apple/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 1) {
          this.imagen = 'assets/apple/cuatro.png';
          this.imagen2 = 'assets/apple/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 1) {
          this.imagen = 'assets/apple/cinco.png';
          this.imagen2 = 'assets/apple/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 3 && this.num2 === 2) {
          this.imagen = 'assets/apple/tres.png';
          this.imagen2 = 'assets/apple/dos.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 3) {
          this.imagen = 'assets/apple/cuatro.png';
          this.imagen2 = 'assets/apple/tres.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 2) {
          this.imagen = 'assets/apple/cuatro.png';
          this.imagen2 = 'assets/apple/dos.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 4) {
          this.imagen = 'assets/apple/cinco.png';
          this.imagen2 = 'assets/apple/cuatro.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 3) {
          this.imagen = 'assets/apple/cinco.png';
          this.imagen2 = 'assets/apple/tres.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 2) {
          this.imagen = 'assets/apple/cinco.png';
          this.imagen2 = 'assets/apple/dos.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 1 && this.num2 === 2) {
          this.imagen = 'assets/apple/uno.png';
          this.imagen2 = 'assets/apple/dos.png';
          return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 1 && this.num2 === 3) {
            this.imagen = 'assets/apple/uno.png';
            this.imagen2 = 'assets/apple/tres.png';
            return this.imagen + this.imagen2;
          } else {
            if (this.num1 === 1 && this.num2 === 4) {
              this.imagen = 'assets/apple/uno.png';
              this.imagen2 = 'assets/apple/cuatro.png';
              return this.imagen + this.imagen2;
            } else {
              if (this.num1 === 1 && this.num2 === 5) {
                this.imagen = 'assets/apple/uno.png';
                this.imagen2 = 'assets/apple/cinco.png';
                return this.imagen + this.imagen2;
              } else {
                if (this.num1 === 2 && this.num2 === 3) {
                  this.imagen = 'assets/apple/dos.png';
                  this.imagen2 = 'assets/apple/tres.png';
                  return this.imagen + this.imagen2;
                } else {
                  if (this.num1 === 2 && this.num2 === 4) {
                    this.imagen = 'assets/apple/dos.png';
                    this.imagen2 = 'assets/apple/cuatro.png';
                    return this.imagen + this.imagen2;
                  } else {
                    if (this.num1 === 2 && this.num2 === 5) {
                      this.imagen = 'assets/apple/dos.png';
                      this.imagen2 = 'assets/apple/cinco.png';
                      return this.imagen + this.imagen2;
                    } else {
                      if (this.num1 === 3 && this.num2 === 4) {
                        this.imagen = 'assets/apple/tres.png';
                        this.imagen2 = 'assets/apple/cuatro.png';
                        return this.imagen + this.imagen2;
                      } else {
                        if (this.num1 === 3 && this.num2 === 5) {
                          this.imagen = 'assets/apple/tres.png';
                          this.imagen2 = 'assets/apple/cinco.png';
                          return this.imagen + this.imagen2;
                        } else {
                          if (this.num1 === 4 && this.num2 === 5) {
                            this.imagen = 'assets/apple/cuatro.png';
                            this.imagen2 = 'assets/apple/cinco.png';
                            return this.imagen + this.imagen2;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
        }
      }
    } else {
      if ( this.imag === 1 ) {
      this.nu = 'ball';
      if (this.num1 === 1 && this.num2 === 1) {
        this.imagen = 'assets/ball/uno.png';
        this.imagen2 = 'assets/ball/uno.png';
        return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 2 && this.num2 === 2) {
          this.imagen = 'assets/ball/dos.png';
          this.imagen2 = 'assets/ball/dos.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 3 && this.num2 === 3) {
          this.imagen = 'assets/ball/tres.png';
          this.imagen2 = 'assets/ball/tres.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 4) {
          this.imagen = 'assets/ball/cuatro.png';
          this.imagen2 = 'assets/ball/cuatro.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 5) {
          this.imagen = 'assets/ball/cinco.png';
          this.imagen2 = 'assets/ball/cinco.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 2 && this.num2 === 1) {
          this.imagen = 'assets/ball/dos.png';
          this.imagen2 = 'assets/ball/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 3 && this.num2 === 1) {
          this.imagen = 'assets/ball/tres.png';
          this.imagen2 = 'assets/ball/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 1) {
          this.imagen = 'assets/ball/cuatro.png';
          this.imagen2 = 'assets/ball/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 1) {
          this.imagen = 'assets/ball/cinco.png';
          this.imagen2 = 'assets/ball/uno.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 3 && this.num2 === 2) {
          this.imagen = 'assets/ball/tres.png';
          this.imagen2 = 'assets/ball/dos.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 3) {
          this.imagen = 'assets/ball/cuatro.png';
          this.imagen2 = 'assets/ball/tres.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 4 && this.num2 === 2) {
          this.imagen = 'assets/ball/cuatro.png';
          this.imagen2 = 'assets/ball/dos.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 4) {
          this.imagen = 'assets/ball/cinco.png';
          this.imagen2 = 'assets/ball/cuatro.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 3) {
          this.imagen = 'assets/ball/cinco.png';
          this.imagen2 = 'assets/ball/tres.png';
          return this.imagen + this.imagen2;
      } else {
        if (this.num1 === 5 && this.num2 === 2) {
          this.imagen = 'assets/ball/cinco.png';
          this.imagen2 = 'assets/ball/dos.png';
          return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 1 && this.num2 === 2) {
            this.imagen = 'assets/ball/uno.png';
            this.imagen2 = 'assets/ball/dos.png';
            return this.imagen + this.imagen2;
          } else {
            if (this.num1 === 1 && this.num2 === 3) {
              this.imagen = 'assets/ball/uno.png';
              this.imagen2 = 'assets/ball/tres.png';
              return this.imagen + this.imagen2;
            } else {
              if (this.num1 === 1 && this.num2 === 4) {
                this.imagen = 'assets/ball/uno.png';
                this.imagen2 = 'assets/ball/cuatro.png';
                return this.imagen + this.imagen2;
              } else {
                if (this.num1 === 1 && this.num2 === 5) {
                  this.imagen = 'assets/ball/uno.png';
                  this.imagen2 = 'assets/ball/cinco.png';
                  return this.imagen + this.imagen2;
                } else {
                  if (this.num1 === 2 && this.num2 === 3) {
                    this.imagen = 'assets/ball/dos.png';
                    this.imagen2 = 'assets/ball/tres.png';
                    return this.imagen + this.imagen2;
                  } else {
                    if (this.num1 === 2 && this.num2 === 4) {
                      this.imagen = 'assets/ball/dos.png';
                      this.imagen2 = 'assets/ball/cuatro.png';
                      return this.imagen + this.imagen2;
                    } else {
                      if (this.num1 === 2 && this.num2 === 5) {
                        this.imagen = 'assets/ball/dos.png';
                        this.imagen2 = 'assets/ball/cinco.png';
                        return this.imagen + this.imagen2;
                      } else {
                        if (this.num1 === 3 && this.num2 === 4) {
                          this.imagen = 'assets/ball/tres.png';
                          this.imagen2 = 'assets/ball/cuatro.png';
                          return this.imagen + this.imagen2;
                        } else {
                          if (this.num1 === 3 && this.num2 === 5) {
                            this.imagen = 'assets/ball/tres.png';
                            this.imagen2 = 'assets/ball/cinco.png';
                            return this.imagen + this.imagen2;
                          } else {
                            if (this.num1 === 4 && this.num2 === 5) {
                              this.imagen = 'assets/ball/cuatro.png';
                              this.imagen2 = 'assets/ball/cinco.png';
                              return this.imagen + this.imagen2;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
                          }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
        }
    } else {
      if ( this.imag === 2 ) {
        this.nu = 'car';
        if (this.num1 === 1 && this.num2 === 1) {
          this.imagen = 'assets/car/uno.png';
          this.imagen2 = 'assets/car/uno.png';
          return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 2 && this.num2 === 2) {
            this.imagen = 'assets/car/dos.png';
            this.imagen2 = 'assets/car/dos.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 3 && this.num2 === 3) {
            this.imagen = 'assets/car/tres.png';
            this.imagen2 = 'assets/car/tres.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 4 && this.num2 === 4) {
            this.imagen = 'assets/car/cuatro.png';
            this.imagen2 = 'assets/car/cuatro.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 5 && this.num2 === 5) {
            this.imagen = 'assets/car/cinco.png';
            this.imagen2 = 'assets/car/cinco.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 2 && this.num2 === 1) {
            this.imagen = 'assets/car/dos.png';
            this.imagen2 = 'assets/car/uno.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 3 && this.num2 === 1) {
            this.imagen = 'assets/car/tres.png';
            this.imagen2 = 'assets/car/uno.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 4 && this.num2 === 1) {
            this.imagen = 'assets/car/cuatro.png';
            this.imagen2 = 'assets/car/uno.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 5 && this.num2 === 1) {
            this.imagen = 'assets/car/cinco.png';
            this.imagen2 = 'assets/car/uno.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 3 && this.num2 === 2) {
            this.imagen = 'assets/car/tres.png';
            this.imagen2 = 'assets/car/dos.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 4 && this.num2 === 3) {
            this.imagen = 'assets/car/cuatro.png';
            this.imagen2 = 'assets/car/tres.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 4 && this.num2 === 2) {
            this.imagen = 'assets/car/cuatro.png';
            this.imagen2 = 'assets/car/dos.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 5 && this.num2 === 4) {
            this.imagen = 'assets/car/cinco.png';
            this.imagen2 = 'assets/car/cuatro.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 5 && this.num2 === 3) {
            this.imagen = 'assets/car/cinco.png';
            this.imagen2 = 'assets/car/tres.png';
            return this.imagen + this.imagen2;
        } else {
          if (this.num1 === 5 && this.num2 === 2) {
            this.imagen = 'assets/car/cinco.png';
            this.imagen2 = 'assets/car/dos.png';
            return this.imagen + this.imagen2;
          } else {
            if (this.num1 === 1 && this.num2 === 2) {
              this.imagen = 'assets/car/uno.png';
              this.imagen2 = 'assets/car/dos.png';
              return this.imagen + this.imagen2;
            } else {
              if (this.num1 === 1 && this.num2 === 3) {
                this.imagen = 'assets/car/uno.png';
                this.imagen2 = 'assets/car/tres.png';
                return this.imagen + this.imagen2;
              } else {
                if (this.num1 === 1 && this.num2 === 4) {
                  this.imagen = 'assets/car/uno.png';
                  this.imagen2 = 'assets/car/cuatro.png';
                  return this.imagen + this.imagen2;
                } else {
                  if (this.num1 === 1 && this.num2 === 5) {
                    this.imagen = 'assets/car/uno.png';
                    this.imagen2 = 'assets/car/cinco.png';
                    return this.imagen + this.imagen2;
                  } else {
                    if (this.num1 === 2 && this.num2 === 3) {
                      this.imagen = 'assets/car/dos.png';
                      this.imagen2 = 'assets/car/tres.png';
                      return this.imagen + this.imagen2;
                    } else {
                      if (this.num1 === 2 && this.num2 === 4) {
                        this.imagen = 'assets/car/dos.png';
                        this.imagen2 = 'assets/car/cuatro.png';
                        return this.imagen + this.imagen2;
                      } else {
                        if (this.num1 === 2 && this.num2 === 5) {
                          this.imagen = 'assets/car/dos.png';
                          this.imagen2 = 'assets/car/cinco.png';
                          return this.imagen + this.imagen2;
                        } else {
                          if (this.num1 === 3 && this.num2 === 4) {
                            this.imagen = 'assets/car/tres.png';
                            this.imagen2 = 'assets/car/cuatro.png';
                            return this.imagen + this.imagen2;
                          } else {
                            if (this.num1 === 3 && this.num2 === 5) {
                              this.imagen = 'assets/car/tres.png';
                              this.imagen2 = 'assets/apple/cinco.png';
                              return this.imagen + this.imagen2;
                            } else {
                              if (this.num1 === 4 && this.num2 === 5) {
                                this.imagen = 'assets/car/cuatro.png';
                                this.imagen2 = 'assets/car/cinco.png';
                                return this.imagen + this.imagen2;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
            }
          }
        }
      }
    }
  }



azar() {
  this.res = this.num1 + this.num2;
  console.log(this.num1, '+' , this.num2);
  console.log('=', this.res);


}

validate() {
  if (this.res === this.resu) {
    console.log('bien');
    this.env = 'Bien';
    switch (this.resu) {
    case 0:
      this.imagenr = 'assets/ceroresta.png';
      break;
    case 1:
      this.imagenr = 'assets/' + this.nu + this.nu1;
      break;
    case 2:
      this.imagenr = 'assets/' + this.nu + this.nu2;
      break;
    case 3:
      this.imagenr = 'assets/' + this.nu + this.nu3;
      break;
    case 4:
      this.imagenr = 'assets/' + this.nu + this.nu4;
      break;
    case 5:
      this.imagenr = 'assets/' + this.nu + this.nu5;
      break;
      case 6:
      this.imagenr = 'assets/' + this.nu + this.nu6;
      break;
      case 7:
      this.imagenr = 'assets/' + this.nu + this.nu7;
      break;
      case 8:
      this.imagenr = 'assets/' + this.nu + this.nu8;
      break;
      case 9:
      this.imagenr = 'assets/' + this.nu + this.nu9;
      break;
      case 10:
      this.imagenr = 'assets/' + this.nu + this.nu10;
      break;
  }
    return this.imagenr;
    
} else {
  this.env = 'Error';
  console.log('Error');
  this.imagenr = 'assets/error.png';
}

}
openSm(content) {
  this.modalService.open(content, { size: 'sm', centered: true });
}

sonido() {
  this.snd.play();
}
}
