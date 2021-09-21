## Onde começa e onde terminam os horários?
- [X] Começa depois do professor e antes das vagas oferecidas.
- [X] Salvar os indices relativos ao content de forma que seja possível definir o início e o fim 
dos horários para cada curso
- [X] Juntar os valores dos indices em um array
````javascript
[
    { start: 6, end: 9},
    { start: 17, end: 20},
]
````
- [X] Dividir o content com base nos limites obtidos
- [X] Obter os horários de cada range, ou seja, da disciplina (**filterTimeTable**)


````javascript
[
  {
    "discipline": "CPTA064 - E ENGENHARIA DE SOFTWARE 2",
    "teacher": "ALEXANDRE DE ANDRADE BARBOSA",
    "classHours": 60,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "09:20 - 10:10"
      },
      {
        "day": "Quarta",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Quarta",
        "time": "11:10 - 12:00"
      }
    ]
  },
  {
    "discipline": "CPTA136 - A ACE 7: CONTINUIDADE DO PROJETO II",
    "teacher": "ALEXANDRE DE ANDRADE BARBOSA",
    "classHours": 72,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quinta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Quinta",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Sexta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Sexta",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA153 - A COMPUTAÇÃO PERSUASIVA",
    "teacher": "ALEXANDRE DE ANDRADE BARBOSA",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quinta",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Quinta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Quinta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA096 - E FUNDAMENTOS DE MATEMÁTICA",
    "teacher": "ALEXANDRE PAES DOS SANTOS",
    "classHours": 54,
    "availableVacancies": 40,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Terça",
        "time": "11:10 - 12:00"
      },
      {
        "day": "Terça",
        "time": "12:00 - 12:50"
      }
    ]
  },
  {
    "discipline": "CPTA122 - A  PROJETO E ANÁLISE DE ALGORITMOS",
    "teacher": "ALEXANDRE PAES DOS SANTOS",
    "classHours": 72,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Terça",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Quinta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Quinta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA146 - A TÓPICOS EM SISTEMAS DE INFORMAÇÃO",
    "teacher": "ALEXANDRE PAES DOS SANTOS",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Terça",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Terça",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA172 - A TÓPICOS ESPECIAIS EM GRAFOS",
    "teacher": "ALEXANDRE PAES DOS SANTOS",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quinta",
        "time": "09:20 - 10:10"
      },
      {
        "day": "Quinta",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Quinta",
        "time": "11:10 - 12:00"
      }
    ]
  },
  {
    "discipline": "CPTA094 - A LÓGICA APLICADA A COMPUTAÇÃO",
    "teacher": "ELTHON ALLEX DA SILVA OLIVEIRA",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Quarta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Quarta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA096 - A FUNDAMENTOS DE MATEMÁTICA",
    "teacher": "ELTHON ALLEX DA SILVA OLIVEIRA",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Segunda",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Segunda",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA115 - A ACE 3: CONTINUIDADE PROJETO I",
    "teacher": "ELTHON ALLEX DA SILVA OLIVEIRA",
    "classHours": 36,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Terça",
        "time": "16:10 - 17:00"
      }
    ]
  },
  {
    "discipline": "CPTA097 - A DIREITO DIGITAL",
    "teacher": "GILSON SALES DE ALBUQUERQUE CUNHA",
    "classHours": 36,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Sexta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Sexta",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA114 - A FILOSOFIA DA CIÊNCIA",
    "teacher": "LANA LISIER DE LIMA PALMEIRA",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quinta",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Quinta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Quinta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA134 - A ÉTICA",
    "teacher": "LANA LISIER DE LIMA PALMEIRA",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Quarta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Quarta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA095 - A ALGORITMOS E PROGRAMAÇÃO DE",
    "teacher": "MARIO HOZANO LUCAS DE SOUZA",
    "classHours": 72,
    "availableVacancies": 25,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Segunda",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Terça",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Terça",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA095 - E ALGORITMOS E PROGRAMAÇÃO DE",
    "teacher": "MARIO HOZANO LUCAS DE SOUZA",
    "classHours": 72,
    "availableVacancies": 25,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Terça",
        "time": "11:10 - 12:00"
      },
      {
        "day": "Quarta",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Quarta",
        "time": "11:10 - 12:00"
      }
    ]
  },
  {
    "discipline": "CPTA109 - A PROGRAMAÇÃO ORIENTADA A OBJETOS",
    "teacher": "PATRICK HENRIQUE DA SILVA BRITO",
    "classHours": 72,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Terça",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Quinta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Quinta",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA123 - A PARADIGMAS DE LINGUAGENS DE",
    "teacher": "PATRICK HENRIQUE DA SILVA BRITO",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Quarta",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Quarta",
        "time": "15:20 - 16:10"
      }
    ]
  },
  {
    "discipline": "CPTA167 - A TOLERÂNCIA A FALHAS DE SOFTWARE",
    "teacher": "PATRICK HENRIQUE DA SILVA BRITO",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Sexta",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Sexta",
        "time": "11:10 - 12:00"
      },
      {
        "day": "Sexta",
        "time": "12:00 - 12:50"
      }
    ]
  },
  {
    "discipline": "CPTA110 - A ORGANIZAÇÃO E ARQUITETURA DE",
    "teacher": "RAQUEL DA SILVA CABRAL",
    "classHours": 72,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "17:10 - 18:00"
      },
      {
        "day": "Sexta",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Sexta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Sexta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA127 - A PLANEJAMENTO DE EXPERIMENTOS",
    "teacher": "RAQUEL DA SILVA CABRAL",
    "classHours": 36,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Sexta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Sexta",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA174 - A PROJETO ORIENTADO A COMPUTAÇÃO",
    "teacher": "RAQUEL DA SILVA CABRAL",
    "classHours": 54,
    "availableVacancies": 30,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "09:20 - 10:10"
      },
      {
        "day": "Quarta",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Quarta",
        "time": "11:10 - 12:00"
      }
    ]
  },
  {
    "discipline": "CPTA142 - A TÓPICOS EM INFORMÁTICA NA EDUCAÇÃO",
    "teacher": "RICARDO ALEXANDRE AFONSO",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Segunda",
        "time": "11:10 - 12:00"
      },
      {
        "day": "Segunda",
        "time": "12:00 - 12:50"
      }
    ]
  },
  {
    "discipline": "CPTA170 - A COMPUTADOR E SOCIEDADE",
    "teacher": "RICARDO ALEXANDRE AFONSO",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Segunda",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Segunda",
        "time": "15:20 - 16:10"
      }
    ]
  },
  {
    "discipline": "CPTA095 - B ALGORITMOS E PROGRAMAÇÃO DE",
    "teacher": "RODOLFO CARNEIRO CAVALCANTE",
    "classHours": 72,
    "availableVacancies": 25,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Segunda",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Terça",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Terça",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA111 - A METODOLOGIA CIENTÍFICA PARA CIÊNCIA",
    "teacher": "RODOLFO CARNEIRO CAVALCANTE",
    "classHours": 36,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Segunda",
        "time": "16:10 - 17:00"
      }
    ]
  },
  {
    "discipline": "CPTA099 - A ACE 1: CURSO: JORNADA DE ATUALIZAÇÃO",
    "teacher": "ROMULO NUNES DE OLIVEIRA",
    "classHours": 16,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "13:30 - 14:20"
      }
    ]
  },
  {
    "discipline": "CPTA099 - E ACE 1: CURSO: JORNADA DE ATUALIZAÇÃO",
    "teacher": "ROMULO NUNES DE OLIVEIRA",
    "classHours": 16,
    "availableVacancies": 30,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "10:10 - 11:00"
      }
    ]
  },
  {
    "discipline": "CPTA126 - A  INTELIGÊNCIA ARTIFICIAL",
    "teacher": "ROMULO NUNES DE OLIVEIRA",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quinta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Quinta",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Quinta",
        "time": "15:20 - 16:10"
      }
    ]
  },
  {
    "discipline": "CPTA093 - A INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO",
    "teacher": "TACITO TRINDADE DE ARAUJO TIBURTINO",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quinta",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Quinta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Quinta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA125 - A  COMPUTAÇÃO GRÁFICA",
    "teacher": "TACITO TRINDADE DE ARAUJO TIBURTINO",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Terça",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Terça",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA173 - A VISUALIZAÇÃO COMPUTACIONAL",
    "teacher": "TACITO TRINDADE DE ARAUJO TIBURTINO",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "08:20 - 09:10"
      },
      {
        "day": "Terça",
        "time": "09:20 - 10:10"
      },
      {
        "day": "Terça",
        "time": "10:10 - 11:00"
      }
    ]
  },
  {
    "discipline": "CPTA055 - E LABORATÓRIO DE PROGRAMAÇÃO 2",
    "teacher": "TERCIO DE MORAIS SAMPAIO SILVA",
    "classHours": 60,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Sexta",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Sexta",
        "time": "11:10 - 12:00"
      },
      {
        "day": "Sexta",
        "time": "12:00 - 12:50"
      }
    ]
  },
  {
    "discipline": "CPTA124 - A  SISTEMAS OPERACIONAIS",
    "teacher": "TERCIO DE MORAIS SAMPAIO SILVA",
    "classHours": 72,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Quarta",
        "time": "17:10 - 18:00"
      },
      {
        "day": "Sexta",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Sexta",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA160 - A COMPUTAÇÃO EM NUVEM",
    "teacher": "TERCIO DE MORAIS SAMPAIO SILVA",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "12:00 - 12:50"
      },
      {
        "day": "Quarta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Quarta",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA073 - E REDES DE COMPUTADORES 2",
    "teacher": "THIAGO BRUNO MELO DE SALES",
    "classHours": 80,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "08:20 - 09:10"
      },
      {
        "day": "Segunda",
        "time": "09:20 - 10:10"
      },
      {
        "day": "Sexta",
        "time": "08:20 - 09:10"
      },
      {
        "day": "Sexta",
        "time": "09:20 - 10:10"
      }
    ]
  },
  {
    "discipline": "CPTA128 - A ACE 5: EVENTO II:ARACOMP-CONGRESSO",
    "teacher": "THIAGO BRUNO MELO DE SALES",
    "classHours": 36,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Segunda",
        "time": "16:10 - 17:00"
      }
    ]
  },
  {
    "discipline": "CPTA140 - A  ENGENHARIA DE SOFTWARE PARA",
    "teacher": "THIAGO BRUNO MELO DE SALES",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "12:00 - 12:50"
      },
      {
        "day": "Terça",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Terça",
        "time": "14:20 - 15:10"
      }
    ]
  },
  {
    "discipline": "CPTA145 - A TÓPICOS EM REDES DE COMPUTADORES",
    "teacher": "THIAGO BRUNO MELO DE SALES",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quinta",
        "time": "09:20 - 10:10"
      },
      {
        "day": "Quinta",
        "time": "10:10 - 11:00"
      },
      {
        "day": "Quinta",
        "time": "11:10 - 12:00"
      }
    ]
  },
  {
    "discipline": "CPTA098 - A SOCIEDADE E CULTURA",
    "teacher": "Não há professor associado a esta turma",
    "classHours": 54,
    "availableVacancies": 50,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Terça",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Terça",
        "time": "16:10 - 17:00"
      },
      {
        "day": "Terça",
        "time": "17:10 - 18:00"
      }
    ]
  },
  {
    "discipline": "CPTA112 - A CALCULO 2",
    "teacher": "Não há professor associado a esta turma",
    "classHours": 72,
    "availableVacancies": 60,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Segunda",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Segunda",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Quarta",
        "time": "15:20 - 16:10"
      },
      {
        "day": "Quarta",
        "time": "16:10 - 17:00"
      }
    ]
  },
  {
    "discipline": "CPTA113 - A ÁLGEBRA LINEAR",
    "teacher": "Não há professor associado a esta turma",
    "classHours": 72,
    "availableVacancies": 60,
    "filledVacancies": 0,
    "hours": [
      {
        "day": "Quarta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Quarta",
        "time": "14:20 - 15:10"
      },
      {
        "day": "Sexta",
        "time": "13:30 - 14:20"
      },
      {
        "day": "Sexta",
        "time": "14:20 - 15:10"
      }
    ]
  }
]
````
