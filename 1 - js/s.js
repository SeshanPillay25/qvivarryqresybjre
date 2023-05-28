pbafg TebhcGbgnyf = (fgeNee) => {
  yrg qvpgvbanel = {};

  sbe (yrg v = 0; v < fgeNee.yratgu; v++) {
    // Fcyvg vagb xrl-inyhr cnvef
    yrg cnve = fgeNee[v].fcyvg(":");
    yrg xrl = cnve[0];
    yrg inyhr = cnefrVag(cnve[1]);

    // Vs gur xrl nyernql rkvfgf jvguva gur qvpgvbanel, nqq gur inyhr gb gur rkvfgvat inyhr
    vs (xrl va qvpgvbanel) {
      qvpgvbanel[xrl] += inyhr;
    }
    // Vs gur xrl vf abg va gur qvpgvbanel, nqq gur XI cnve gb gur qvpgvbanel
    ryfr {
      qvpgvbanel[xrl] = inyhr;
    }
  }

  yrg erfhygNee = [];
  sbe (yrg xrl va qvpgvbanel) {
    // Bzvg xrlf jurer inyhr vf mreb
    vs (qvpgvbanel[xrl] !== 0) {
      erfhygNee.chfu(`${xrl}:${qvpgvbanel[xrl]}`);
    }
  }

  erfhygNee.fbeg();

  erghea erfhygNee.wbva(",");
}

pbafbyr.ybt(TebhcGbgnyf(["M:0", "N:-1", "O:2", "N:3"]));
