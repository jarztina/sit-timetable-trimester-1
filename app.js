(function(){
  "use strict";

  var COURSES = {
    ceg1007:  { name:"Digital Systems", code:"CEG 1007", dot:"--c-ceg1007-dot", text:"--c-ceg1007-text", tint:"--c-ceg1007-tint" },
    ceg1009:  { name:"Signals and Systems", code:"CEG 1009", dot:"--c-ceg1009-dot", text:"--c-ceg1009-text", tint:"--c-ceg1009-tint" },
    ceg4000:  { name:"Integrated Work Study Programm", code:"CEG 4000A", dot:"--c-ceg4000-dot", text:"--c-ceg4000-text", tint:"--c-ceg4000-tint" },
    eng1002:  { name:"Engineering Mathematics 2", code:"ENG 1002", dot:"--c-eng1002-dot", text:"--c-eng1002-text", tint:"--c-eng1002-tint" },
    inf1107:  { name:"Data Structures and Algorithms", code:"INF 1107", dot:"--c-inf1107-dot", text:"--c-inf1107-text", tint:"--c-inf1107-tint" }
  };

  // [date, start, end, courseId, type, room, instructor]
  var RAW = [
    ["2027-01-04","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-01-11","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-01-18","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-01-25","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-02-01","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-02-08","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-02-22","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-03-01","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-03-08","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-03-15","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-03-22","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-03-29","09:00","11:00","ceg1007","Lecture","Online","Lee Siew Weng"],
    ["2027-02-22","16:00","18:00","ceg1007","Quiz","E3-01-01-Lectorial 8","Lee Siew Weng"],
    ["2027-01-06","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-01-13","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-01-20","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-01-27","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-02-03","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-02-10","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-02-24","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-03-03","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-03-10","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-03-17","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-03-24","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-03-31","10:30","12:00","ceg1007","Tutorial","E6-2M-02-SR319","Lee Siew Weng"],
    ["2027-01-14","09:00","12:00","ceg1007","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2027-01-28","09:00","12:00","ceg1007","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2027-02-11","09:00","12:00","ceg1007","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2027-03-04","09:00","12:00","ceg1007","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2027-03-18","09:00","12:00","ceg1007","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2027-04-01","09:00","13:00","ceg1007","Lab","E2-05-12","Chew, How, Lee, Lim"],

    ["2027-01-04","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-01-11","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-01-18","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-01-25","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-02-01","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-02-08","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-02-22","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-03-01","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-03-08","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-03-15","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-03-22","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-03-29","11:00","13:00","ceg1009","Lecture","Online","Pei Yiyang"],
    ["2027-01-06","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-01-13","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-01-20","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-01-27","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-02-03","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-02-10","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-02-24","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-03-03","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-03-17","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-03-24","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-03-31","13:00","14:00","ceg1009","Tutorial","E6-2M-02-SR319","Pei Yiyang"],
    ["2027-03-08","16:00","17:00","ceg1009","Tutorial","E2-07-05-SR263","Pei Yiyang"],
    ["2027-01-21","13:00","16:00","ceg1009","Lab","E2-05-12","How, Lim, Pei"],
    ["2027-02-04","13:00","16:00","ceg1009","Lab","E2-05-12","How, Lim, Pei"],
    ["2027-03-04","13:00","16:00","ceg1009","Lab","E2-05-12","Chew, How, Lim, Pei"],
    ["2027-03-18","13:00","16:00","ceg1009","Lab","E2-05-12","Chew, How, Lim, Pei"],
    ["2027-02-12","10:00","12:00","ceg1009","Quiz","W5-02-01-Lectorial 2","Pei Yiyang"],
    ["2027-03-22","16:00","18:00","ceg1009","Quiz","E3-01-01-Lectorial 8","Pei Yiyang"],

    ["2027-01-20","14:00","16:00","ceg4000","Workshop","Online","Randford Joseph Tay Yi Wei"],

    ["2027-01-05","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-01-12","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-01-19","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-01-26","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-02-02","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-02-09","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-02-23","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-03-02","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-03-09","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-03-16","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-03-23","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-03-30","09:00","11:00","eng1002","Lecture","Online","Yeo Chong Hun"],
    ["2027-02-24","14:00","15:30","eng1002","Quiz","E2-01-02-Lectorial 7","Wendy Chiew Chooi Leng"],
    ["2027-03-31","14:00","15:30","eng1002","Quiz","E2-01-02-Lectorial 7","Wendy Chiew Chooi Leng"],
    ["2027-01-08","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-01-15","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-01-22","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-01-29","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-02-05","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-02-12","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-02-26","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-03-05","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-03-12","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-03-19","16:00","18:00","eng1002","Tutorial","E2-04-02-SR232","Wendy Chiew Chooi Leng"],
    ["2027-03-23","14:00","16:00","eng1002","Tutorial","E2-06-05-SR252","Wendy Chiew Chooi Leng"],

    ["2027-01-08","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-01-15","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-01-22","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-01-29","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-02-05","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-02-26","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-03-05","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-03-12","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-03-19","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-03-26","14:00","16:00","inf1107","Lab","E6-2M-02-SR319","Lim Yishun"],
    ["2027-01-12","11:00","12:00","inf1107","Lecture","Online","Loo Poh Kok"],
    ["2027-01-19","11:00","12:00","inf1107","Lecture","Online","Loo Poh Kok"],
    ["2027-01-26","11:00","12:00","inf1107","Lecture","Online","Loo Poh Kok"],
    ["2027-02-02","11:00","12:00","inf1107","Lecture","Online","Loo Poh Kok"],
    ["2027-02-23","11:00","12:00","inf1107","Lecture","Online","Nisha Jain"],
    ["2027-03-02","11:00","12:00","inf1107","Lecture","Online","Nisha Jain"],
    ["2027-03-09","11:00","12:00","inf1107","Lecture","Online","Nisha Jain"],
    ["2027-03-16","11:00","12:00","inf1107","Lecture","Online","Nisha Jain"],
    ["2027-03-23","11:00","12:00","inf1107","Lecture","Online","Nisha Jain"],
    ["2027-02-09","18:00","20:00","inf1107","Quiz","E6-02-03-Lectorial 11","Loo Poh Kok, Nisha Jain"],
    ["2027-03-30","18:00","20:00","inf1107","Quiz","E6-02-03-Lectorial 11","Loo Poh Kok, Nisha Jain"]
  ];

  var EVENTS = RAW.map(function(r){
    return { date:r[0], start:r[1], end:r[2], course:r[3], type:r[4], room:r[5], instructor:r[6] };
  }).sort(function(a,b){
    if(a.date!==b.date) return a.date<b.date?-1:1;
    return a.start<b.start?-1:1;
  });

  var byDate = {};
  EVENTS.forEach(function(e){
    (byDate[e.date] = byDate[e.date] || []).push(e);
  });

  var activeCourses = Object.keys(COURSES).reduce(function(acc,k){ acc[k]=true; return acc; },{});

  function pad(n){ return n<10 ? "0"+n : ""+n; }
  function toKey(y,m,d){ return y+"-"+pad(m+1)+"-"+pad(d); }
  function fmtTime(t){
    var parts=t.split(":"); var h=parseInt(parts[0],10); var mi=parts[1];
    var ap = h>=12 ? "PM" : "AM";
    var h12 = h%12; if(h12===0) h12=12;
    return h12+(mi==="00"?"":":"+mi)+ap;
  }
  var MONTH_NAMES=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var DOW_NAMES=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  var today = new Date();
  var todayKey = toKey(today.getFullYear(), today.getMonth(), today.getDate());

  // Outside the semester? Open on the first class day instead of an empty month.
  var allKeys = Object.keys(byDate).sort();
  var firstKey = allKeys[0], lastKey = allKeys[allKeys.length-1];
  var startKey = (todayKey < firstKey || todayKey > lastKey) ? firstKey : todayKey;
  var startParts = startKey.split("-").map(Number);

  var state = {
    view:"month",
    cursorY: startParts[0],
    cursorM: startParts[1]-1,
    selected: startKey
  };

  // ---- Legend ----
  var legendEl = document.getElementById("legend");
  Object.keys(COURSES).forEach(function(id){
    var c = COURSES[id];
    var chip = document.createElement("button");
    chip.className = "legend-chip";
    chip.style.cssText = "border:none;cursor:pointer;";
    chip.innerHTML = '<span class="legend-dot" style="background:var('+c.dot+')"></span>'+c.code;
    chip.addEventListener("click", function(){
      activeCourses[id] = !activeCourses[id];
      chip.style.opacity = activeCourses[id] ? "1" : "0.35";
      renderGrid();
      renderAgenda();
      renderList();
    });
    legendEl.appendChild(chip);
  });

  // ---- Month grid ----
  var gridEl = document.getElementById("grid");
  var monthLabelEl = document.getElementById("monthLabel");

  function renderGrid(){
    monthLabelEl.textContent = MONTH_NAMES[state.cursorM] + " " + state.cursorY;
    gridEl.innerHTML = "";
    var firstOfMonth = new Date(state.cursorY, state.cursorM, 1);
    var startDow = firstOfMonth.getDay();
    var daysInMonth = new Date(state.cursorY, state.cursorM+1, 0).getDate();
    var daysInPrevMonth = new Date(state.cursorY, state.cursorM, 0).getDate();

    var cells = [];
    for(var i=0;i<startDow;i++){
      var pm = state.cursorM===0?11:state.cursorM-1;
      var py = state.cursorM===0?state.cursorY-1:state.cursorY;
      var dnum = daysInPrevMonth-startDow+1+i;
      cells.push({y:py,m:pm,d:dnum,other:true});
    }
    for(var d=1; d<=daysInMonth; d++){
      cells.push({y:state.cursorY,m:state.cursorM,d:d,other:false});
    }
    while(cells.length % 7 !== 0 || cells.length < 35){
      var last = cells[cells.length-1];
      var nd = new Date(last.y,last.m,last.d+1);
      cells.push({y:nd.getFullYear(),m:nd.getMonth(),d:nd.getDate(),other:true});
    }

    cells.forEach(function(c){
      var key = toKey(c.y,c.m,c.d);
      var el = document.createElement("div");
      el.className = "day" + (c.other?" other-month":"") + (key===todayKey?" is-today":"") + (key===state.selected?" is-selected":"");
      var num = document.createElement("span");
      num.className = "daynum";
      num.textContent = c.d;
      el.appendChild(num);

      var dayEvents = (byDate[key]||[]).filter(function(e){ return activeCourses[e.course]; });
      if(dayEvents.length){
        var dots = document.createElement("div");
        dots.className = "daydots";
        var uniq = [];
        dayEvents.forEach(function(e){ if(uniq.indexOf(e.course)===-1) uniq.push(e.course); });
        uniq.slice(0,4).forEach(function(cid){
          var dot = document.createElement("i");
          dot.style.background = "var("+COURSES[cid].dot+")";
          dots.appendChild(dot);
        });
        el.appendChild(dots);
      }

      el.addEventListener("click", function(){
        state.selected = key;
        renderGrid();
        renderAgenda();
      });
      gridEl.appendChild(el);
    });
  }

  // ---- Agenda (selected day) ----
  var agendaDateEl = document.getElementById("agendaDate");
  var agendaCountEl = document.getElementById("agendaCount");
  var agendaListEl = document.getElementById("agendaList");

  function eventCardHTML(e){
    var c = COURSES[e.course];
    return '<div class="event-card">'
      + '<div class="event-bar" style="background:var('+c.dot+')"></div>'
      + '<div class="event-body">'
        + '<div class="event-top">'
          + '<span class="event-course">'+c.code+'</span>'
          + '<span class="event-type" style="background:var('+c.tint+');color:var('+c.text+')">'+e.type+'</span>'
        + '</div>'
        + '<div class="event-name">'+c.name+'</div>'
        + '<div class="event-meta">'+fmtTime(e.start)+' &ndash; '+fmtTime(e.end)+'<span class="sep">&middot;</span>'+e.room+'</div>'
        + '<div class="event-instructor">'+e.instructor+'</div>'
      + '</div>'
    + '</div>';
  }

  function renderAgenda(){
    var key = state.selected;
    var parts = key.split("-").map(Number);
    var dt = new Date(parts[0], parts[1]-1, parts[2]);
    var label = DOW_NAMES[dt.getDay()]+", "+MONTH_NAMES[dt.getMonth()]+" "+dt.getDate();
    if(key===todayKey){
      agendaDateEl.innerHTML = "Today <span style='color:var(--text-faint);font-weight:500;'>&middot; "+label+"</span>";
    } else {
      agendaDateEl.textContent = label;
    }

    var dayEvents = (byDate[key]||[]).filter(function(e){ return activeCourses[e.course]; });
    agendaCountEl.textContent = dayEvents.length ? dayEvents.length+" class"+(dayEvents.length>1?"es":"") : "";

    if(!dayEvents.length){
      var nextKey = null;
      var keys = Object.keys(byDate).sort();
      for(var i=0;i<keys.length;i++){ if(keys[i] > key){ nextKey = keys[i]; break; } }
      agendaListEl.innerHTML = '<div class="empty-state">No classes today'
        + (nextKey ? '<button id="jumpNext">Jump to next class</button>' : '')
        + '</div>';
      if(nextKey){
        document.getElementById("jumpNext").addEventListener("click", function(){
          var p = nextKey.split("-").map(Number);
          state.cursorY = p[0]; state.cursorM = p[1]-1; state.selected = nextKey;
          renderGrid(); renderAgenda();
        });
      }
      return;
    }
    agendaListEl.innerHTML = dayEvents.map(eventCardHTML).join("");
  }

  // ---- List view ----
  var listViewEl = document.getElementById("listView");
  function renderList(){
    var keys = Object.keys(byDate).sort();
    var html = "";
    var currentMonthKey = "";
    keys.forEach(function(key){
      var dayEvents = byDate[key].filter(function(e){ return activeCourses[e.course]; });
      if(!dayEvents.length) return;
      var parts = key.split("-").map(Number);
      var dt = new Date(parts[0], parts[1]-1, parts[2]);
      var mKey = parts[0]+"-"+parts[1];
      if(mKey !== currentMonthKey){
        html += '<div class="list-month-heading">'+MONTH_NAMES[dt.getMonth()]+" "+parts[0]+'</div>';
        currentMonthKey = mKey;
      }
      var isToday = key===todayKey;
      html += '<div class="list-day-row">'
        + '<div class="list-day-label'+(isToday?' today-label':'')+'"><span>'+dt.getDate()+'</span><span class="dow">'+DOW_NAMES[dt.getDay()]+(isToday?' · Today':'')+'</span></div>'
        + dayEvents.map(eventCardHTML).join("")
      + '</div>';
    });
    listViewEl.innerHTML = html || '<div class="empty-state">No classes match the current filters</div>';
  }

  // ---- Nav ----
  document.getElementById("prevBtn").addEventListener("click", function(){
    state.cursorM--; if(state.cursorM<0){ state.cursorM=11; state.cursorY--; }
    renderGrid();
  });
  document.getElementById("nextBtn").addEventListener("click", function(){
    state.cursorM++; if(state.cursorM>11){ state.cursorM=0; state.cursorY++; }
    renderGrid();
  });
  document.getElementById("todayBtn").addEventListener("click", function(){
    state.cursorY = today.getFullYear(); state.cursorM = today.getMonth(); state.selected = todayKey;
    renderGrid(); renderAgenda();
  });

  var tabs = document.querySelectorAll(".tab");
  var monthViewEl = document.getElementById("monthView");
  tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
      tabs.forEach(function(t){ t.classList.remove("active"); });
      tab.classList.add("active");
      state.view = tab.dataset.view;
      if(state.view==="month"){
        monthViewEl.style.display=""; listViewEl.style.display="none";
      } else {
        monthViewEl.style.display="none"; listViewEl.style.display=""; renderList();
      }
    });
  });

  renderGrid();
  renderAgenda();

  if("serviceWorker" in navigator){
    window.addEventListener("load", function(){
      navigator.serviceWorker.register("sw.js").catch(function(){});
    });
  }
})();
