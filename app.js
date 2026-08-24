(function(){
  "use strict";

  var COURSES = {
    ceg1003:  { name:"Electronic Circuits",                  code:"CEG 1003",  dot:"--c-ceg1003-dot", text:"--c-ceg1003-text", tint:"--c-ceg1003-tint" },
    ceg4000:  { name:"Integrated Work Study Programm",       code:"CEG 4000A", dot:"--c-ceg4000-dot", text:"--c-ceg4000-text", tint:"--c-ceg4000-tint" },
    eng1001:  { name:"Engineering Mathematics 1",            code:"ENG 1001",  dot:"--c-eng1001-dot", text:"--c-eng1001-text", tint:"--c-eng1001-tint" },
    inf1103:  { name:"Programming Fundamentals",             code:"INF 1103",  dot:"--c-inf1103-dot", text:"--c-inf1103-text", tint:"--c-inf1103-tint" },
    ucs1001:  { name:"Critical Thinking and Communications", code:"UCS 1001",  dot:"--c-ucs1001-dot", text:"--c-ucs1001-text", tint:"--c-ucs1001-tint" }
  };

  // [date, start, end, courseId, type, room, instructor]
  var RAW = [
    ["2026-09-03","09:00","12:00","ceg1003","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2026-09-17","09:00","12:00","ceg1003","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2026-10-01","09:00","12:00","ceg1003","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2026-10-22","09:00","12:00","ceg1003","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2026-11-05","09:00","12:00","ceg1003","Lab","E2-05-12","Chew, How, Lee, Lim"],
    ["2026-11-19","09:00","13:00","ceg1003","Lab","E2-05-12","Chew, How, Lee, Lim"],

    ["2026-08-31","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-09-07","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-09-14","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-09-21","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-09-28","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-10-05","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-10-19","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-10-26","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-11-02","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-11-09","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-11-16","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],
    ["2026-11-23","11:00","13:00","ceg1003","Lecture","Online","Lee Siew Weng"],

    ["2026-10-20","09:00","11:00","ceg1003","Quiz","E2-07-13","Lee Siew Weng"],

    ["2026-09-04","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-09-11","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-09-18","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-09-25","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-10-02","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-10-09","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-10-23","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-10-30","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-11-06","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-11-13","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-11-20","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],
    ["2026-11-27","16:00","18:00","ceg1003","Tutorial","E2-06-05-SR252","Lee Siew Weng"],

    ["2026-09-01","11:00","13:00","ceg4000","Workshop","E6-02-03-Lectorial 11","Randford Joseph Tay Yi Wei"],
    ["2026-09-23","14:00","16:00","ceg4000","Workshop","Online","Randford Joseph Tay Yi Wei"],

    ["2026-08-31","09:00","11:00","eng1001","Lecture","Online","Yeo Chong Hun"],
    ["2026-09-07","09:00","11:00","eng1001","Lecture","Online","Yeo Chong Hun"],
    ["2026-09-14","09:00","11:00","eng1001","Lecture","Online","Yeo Chong Hun"],
    ["2026-09-21","09:00","11:00","eng1001","Lecture","Online","Yeo Chong Hun"],
    ["2026-09-28","09:00","11:00","eng1001","Lecture","Online","Yeo Chong Hun"],
    ["2026-10-05","09:00","11:00","eng1001","Lecture","Online","Yeo Chong Hun"],
    ["2026-10-19","09:00","11:00","eng1001","Lecture","Online","Wendy Chiew Chooi Leng"],
    ["2026-10-26","09:00","11:00","eng1001","Lecture","Online","Wendy Chiew Chooi Leng"],
    ["2026-11-02","09:00","11:00","eng1001","Lecture","Online","Wendy Chiew Chooi Leng"],
    ["2026-11-07","10:00","12:00","eng1001","Lecture","Online","Wendy Chiew Chooi Leng"],
    ["2026-11-16","09:00","11:00","eng1001","Lecture","Online","Wendy Chiew Chooi Leng"],
    ["2026-11-23","09:00","11:00","eng1001","Lecture","Online","Wendy Chiew Chooi Leng"],

    ["2026-10-21","14:30","16:00","eng1001","Quiz","E2-04-04-SR234","Wendy Chiew Chooi Leng"],
    ["2026-11-25","14:30","16:00","eng1001","Quiz","E3-01-01-Lectorial 8","Wendy Chiew Chooi Leng"],

    ["2026-09-03","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-09-10","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-09-17","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-09-24","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-10-01","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-10-08","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-10-22","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-10-29","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-11-05","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-11-12","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],
    ["2026-11-19","14:00","16:00","eng1001","Tutorial","E2-03-05-SR223","Wendy Chiew Chooi Leng"],

    ["2026-08-31","14:00","16:00","inf1103","Lecture","Online","Nisha Jain"],
    ["2026-09-07","14:00","16:00","inf1103","Lecture","Online","Nisha Jain"],
    ["2026-09-14","14:00","16:00","inf1103","Lecture","Online","Nisha Jain"],
    ["2026-09-21","14:00","16:00","inf1103","Lecture","Online","Nisha Jain"],
    ["2026-09-28","14:00","16:00","inf1103","Lecture","Online","Nisha Jain"],
    ["2026-10-05","14:00","16:00","inf1103","Lecture","Online","Nisha Jain"],
    ["2026-10-19","14:00","16:00","inf1103","Lecture","Online","Oran Zane Devilly"],
    ["2026-10-26","14:00","16:00","inf1103","Lecture","Online","Oran Zane Devilly"],
    ["2026-11-02","14:00","16:00","inf1103","Lecture","Online","Oran Zane Devilly"],
    ["2026-11-09","14:00","16:00","inf1103","Lecture","Online","Oran Zane Devilly"],
    ["2026-11-16","14:00","16:00","inf1103","Lecture","Online","Oran Zane Devilly"],
    ["2026-11-23","14:00","16:00","inf1103","Lecture","Online","Oran Zane Devilly"],

    ["2026-09-04","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Nisha Jain"],
    ["2026-09-11","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Nisha Jain"],
    ["2026-09-18","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Nisha Jain"],
    ["2026-09-25","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Nisha Jain"],
    ["2026-10-02","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Nisha Jain"],
    ["2026-10-09","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Nisha Jain"],
    ["2026-10-23","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Oran Zane Devilly"],
    ["2026-10-30","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Oran Zane Devilly"],
    ["2026-11-06","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Oran Zane Devilly"],
    ["2026-11-13","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Oran Zane Devilly"],
    ["2026-11-20","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Oran Zane Devilly"],
    ["2026-11-27","10:00","12:00","inf1103","Lab","E6-04-04-SR347","Jacob Abraham, Lam Kuet Leong, Oran Zane Devilly"],

    ["2026-10-05","18:00","20:00","inf1103","Quiz","E6-02-03-Lectorial 11","Nisha Jain"],
    ["2026-11-16","18:00","20:00","inf1103","Quiz","E3-01-01-Lectorial 8","Oran Zane Devilly"],

    ["2026-09-02","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-04","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-09","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-11","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-16","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-18","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-23","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-25","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-09-30","11:00","13:00","ucs1001","Seminar","Online","Fung Cheung Kam See"],
    ["2026-10-02","14:00","16:00","ucs1001","Seminar","Online","Fung Cheung Kam See"],
    ["2026-10-07","11:00","13:00","ucs1001","Seminar","Online","Fung Cheung Kam See"],
    ["2026-10-09","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-10-21","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-10-23","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-10-28","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-10-30","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-11-04","11:00","13:00","ucs1001","Seminar","Online","Fung Cheung Kam See"],
    ["2026-11-06","14:00","16:00","ucs1001","Seminar","Online","Fung Cheung Kam See"],
    ["2026-11-11","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-11-13","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-11-18","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-11-20","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-11-25","11:00","13:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"],
    ["2026-11-27","14:00","16:00","ucs1001","Seminar","E2-03-18-SR230","Fung Cheung Kam See"]
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

  var state = {
    view:"month",
    cursorY: today.getFullYear(),
    cursorM: today.getMonth(),
    selected: todayKey
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
