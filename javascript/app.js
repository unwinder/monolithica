/**
 * space game
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 

function getCookieScore(player) {
  var score=getCookie(player);
  if (score!="") {
      return parseInt (score);
  } else{
      return 0;
  }
} 


function initWillSpaceship() {
  spaceship={
      coordinates: [{x:12,y:0},{x:13,y:0},{x:14,y:0},{x:15,y:0},{x:16,y:0},{x:17,y:0},{x:18,y:0},{x:19,y:0},
                    {x:13,y:1},{x:14,y:1},{x:15,y:1},{x:16,y:1},
                    {x:14,y:2},{x:15,y:2},{x:16,y:2},{x:17,y:2},
                    {x:14,y:3},{x:15,y:3},{x:16,y:3},{x:17,y:3},{x:18,y:3},
                    {x:7,y:4},{x:8,y:4},{x:9,y:4},{x:13,y:4},{x:14,y:4},{x:15,y:4},{x:16,y:4},{x:17,y:4},{x:18,y:4},
                    {x:9,y:5},{x:10,y:5},{x:12,y:5},{x:13,y:5},{x:14,y:5},{x:15,y:5}, {x:18, y:5}, {x:19, y:5},
                    {x:9,y:6}, {x:10, y:6}, {x:11, y:6}, {x:12, y:6}, {x:13, y:6}, {x:14, y:6}, {x:15, y:6}, {x:16, y:6}, {x:17, y:6}, {x:18, y:6}, {x:19, y:6}, {x:20, y:6},{x:21, y:6}, {x:22, y:6},
                    {x:9,y:7},{x:10,y:7},{x:12,y:7},{x:13,y:7},{x:14,y:7},{x:15,y:7}, {x:18, y:7}, {x:19, y:7},
                    {x:7,y:8},{x:8,y:8},{x:9,y:8},{x:13,y:8},{x:14,y:8},{x:15,y:8},{x:16,y:8},{x:17,y:8},{x:18,y:8},
                    {x:14,y:9},{x:15,y:9},{x:16,y:9},{x:17,y:9},{x:18,y:9},
                    {x:14,y:10},{x:15,y:10},{x:16,y:10},{x:17,y:10},
                    {x:13,y:11},{x:14,y:11},{x:15,y:11},{x:16,y:11},
                    {x:12,y:12},{x:13,y:12},{x:14,y:12},{x:15,y:12},{x:16,y:12},{x:17,y:12},{x:18,y:12},{x:19,y:12},],
  } 
}
function initSpaceship() {
  spaceship = {
    coordinates:[{x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0},
                 {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:4,y:1}, {x:5,y:1}, {x:6,y:1},
                 {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:4,y:2},
                 {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:4,y:3},
                 {x:1,y:4}, {x:2,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:6,y:4},
                 {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:4,y:5}, {x:5,y:5}, {x:6,y:5},
                 {x:1,y:6}, {x:2,y:6}, {x:3,y:6}, {x:4,y:6}, {x:5,y:6}, {x:6,y:6}, {x:7,y:6}, {x:8,y:6}, {x:9,y:6}, {x:10,y:6},
                 {x:1,y:7}, {x:2,y:7}, {x:3,y:7}, {x:4,y:7}, {x:5,y:7}, {x:6,y:7}, {x:7,y:7}, {x:8,y:7}, {x:9,y:7}, {x:10,y:7},
                 {x:1,y:8}, {x:2,y:8}, {x:3,y:8}, {x:4,y:8}, {x:5,y:8}, {x:6,y:8}, {x:7,y:8}, {x:8,y:8}, {x:9,y:8}, {x:10,y:8}, {x:11,y:8}, {x:12,y:8}, {x:13,y:8},
                 {x:1,y:9}, {x:2,y:9}, {x:3,y:9}, {x:4,y:9}, {x:5,y:9}, {x:6,y:9}, {x:7,y:9}, {x:8,y:9}, {x:9,y:9}, {x:10,y:9}, {x:11,y:9}, {x:12,y:9}, {x:13,y:9},
                 {x:1,y:10},{x:2,y:10}, {x:3,y:10}, {x:4,y:10},{x:5,y:10}, {x:6,y:10},{x:7,y:10}, {x:8,y:10},{x:9,y:10}, {x:10,y:10},
                 {x:1,y:11},{x:2,y:11}, {x:3,y:11}, {x:4,y:11},{x:5,y:11}, {x:6,y:11},{x:7,y:11}, {x:8,y:11},{x:9,y:11}, {x:10,y:11},
                 {x:1,y:12},{x:2,y:12}, {x:3,y:12}, {x:4,y:12},{x:5,y:12}, {x:6,y:12},
                 {x:1,y:13},{x:2,y:13}, {x:3,y:13}, {x:4,y:13},{x:5,y:13}, {x:6,y:13},
                 {x:1,y:14},{x:2,y:14}, {x:3,y:14}, {x:4,y:14},
                 {x:1,y:15},{x:2,y:15}, {x:3,y:15}, {x:4,y:15}, 
                 {x:1,y:16},{x:2,y:16}, {x:3,y:16}, {x:4,y:16}, {x:5,y:16}, {x:6,y:16}, 
                 {x:1,y:17},{x:2,y:17}, {x:3,y:17}, {x:4,y:17}, {x:5,y:17}, {x:6,y:17},],
  };
}

function initJerrySpaceship() {
  spaceship = {
      coordinates:[
                   {x:15, y:4}, {x:16, y:4}, {x:17, y:4}, {x:18, y:4}, {x:19, y:4}, {x:20, y:4}, {x:21, y:4}, {x:22, y:4}, {x:23, y:4}, {x:24, y:4}, {x:25, y:4}, {x:26, y:4}, {x:27, y:4}, {x:28, y:4}, {x:29, y:4}, {x:30, y:4}, {x:31, y:4}, {x:32, y:4}, {x:33, y:4}, {x:34, y:4}, {x:35, y:4}, {x:36, y:4},
                   {x:17, y:5}, {x:18, y:4}, {x:19, y:5}, {x:20, y:5}, {x:21, y:5}, {x:22, y:5}, {x:23, y:5}, {x:24, y:5}, {x:25, y:5}, {x:26, y:5}, {x:27, y:5}, {x:28, y:5}, {x:29, y:5}, {x:30, y:5}, {x:31, y:5}, {x:32, y:5}, {x:33, y:5},
                   {x:15, y:6}, {x:16, y:6}, {x:17, y:6}, {x:18, y:6}, {x:19, y:6}, {x:20, y:6}, {x:21, y:6}, {x:22, y:6}, {x:23, y:6}, {x:24, y:6}, {x:25, y:6}, {x:26, y:6}, {x:27, y:6}, {x:28, y:6}, {x:29, y:6}, {x:30, y:6}, 
                   {x:25, y:7}, {x:26, y:7}, {x:27, y:7},
                   {x:26, y:8},
                   {x:26, y:9},
                   {x:25, y:10}, {x:26, y:10}, {x:27, y:10},
                   {x:24, y:11}, {x:25, y:11}, {x:26, y:11}, {x:27, y:11}, {x:28, y:11},
                   {x:15, y:12}, {x:16, y:12}, {x:17, y:12}, {x:18, y:12}, {x:19, y:12}, {x:20, y:12}, {x:21, y:12}, {x:22, y:12}, {x:23, y:12}, {x:24, y:12}, {x:25, y:12}, {x:26, y:12}, {x:27, y:12}, {x:28, y:12}, {x:29, y:12}, {x:30, y:12}, {x:31, y:12}, {x:32, y:12}, {x:33, y:12}, {x:34, y:12}, {x:35, y:12}, {x:36, y:12}, {x:37, y:12}, {x:38, y:12}, {x:39, y:12}, {x:40, y:12}, {x:41, y:12}, {x:42, y:12},
                   {x:17, y:13}, {x:18, y:13}, {x:19, y:13}, {x:20, y:13}, {x:21, y:13}, {x:22, y:13}, {x:23, y:13}, {x:24, y:13}, {x:25, y:13}, {x:26, y:13}, {x:27, y:13}, {x:28, y:13}, {x:29, y:13}, {x:30, y:13}, {x:31, y:13}, {x:32, y:13}, {x:33, y:13}, {x:34, y:13}, {x:35, y:13}, {x:36, y:13}, {x:37, y:13}, {x:38, y:13}, {x:39, y:13}, 
                   {x:15, y:14}, {x:16, y:14}, {x:17, y:14}, {x:18, y:14}, {x:19, y:14}, {x:20, y:14}, {x:21, y:14}, {x:22, y:14}, {x:23, y:14}, {x:24, y:14}, {x:25, y:14}, {x:26, y:14}, {x:27, y:14}, {x:28, y:14}, {x:29, y:14}, {x:30, y:14}, {x:31, y:14}, {x:32, y:14}, {x:33, y:14}, {x:34, y:14}, {x:35, y:14}, {x:36, y:14}, 
                   {x:26, y:15},
                   {x:25, y:16}, {x:26, y:16}, {x:27, y:16},
                   {x:10, y:17}, {x:24, y:17}, {x:25, y:17}, {x:26, y:17}, {x:27, y:17}, {x:28, y:17},
                   {x:10, y:18}, {x:17, y:18}, {x:18, y:18}, {x:19, y:18}, {x:20, y:18}, {x:21, y:18}, {x:22, y:18}, {x:23, y:18}, {x:24, y:18}, {x:25, y:18}, {x:26, y:18}, {x:27, y:18}, {x:28, y:18}, {x:29, y:18}, {x:30, y:18}, {x:31, y:18}, {x:32, y:18}, {x:33, y:18}, {x:34, y:18}, {x:35, y:18}, {x:36, y:18}, {x:37, y:18}, {x:38, y:18}, {x:39, y:18}, {x:40, y:18}, {x:41, y:18}, {x:42, y:18}, {x:43, y:18}, {x:44, y:18},{x:45, y:18}, {x:46, y:18},
                   {x:10, y:19}, {x:17, y:19}, {x:18, y:19}, {x:19, y:19}, {x:20, y:19}, {x:21, y:19}, {x:22, y:19}, {x:23, y:19}, {x:24, y:19}, {x:25, y:19}, {x:26, y:19}, {x:27, y:19}, {x:28, y:19}, {x:29, y:19}, {x:30, y:19}, {x:31, y:19}, {x:32, y:19}, {x:33, y:19}, {x:34, y:19}, {x:35, y:19}, {x:36, y:19}, {x:37, y:19}, {x:38, y:19}, {x:39, y:19}, {x:40, y:19}, {x:41, y:19}, {x:42, y:19}, {x:43, y:19}, {x:44, y:19}, {x:45, y:19}, {x:46, y:19}, {x:47, y:19},
                   {x:10, y:20}, {x:17, y:20}, {x:18, y:20}, {x:19, y:20}, {x:20, y:20}, {x:21, y:20}, {x:22, y:20}, {x:23, y:20}, {x:24, y:20}, {x:25, y:20}, {x:26, y:20}, {x:27, y:20}, {x:28, y:20}, {x:29, y:20}, {x:30, y:20}, {x:31, y:20}, {x:32, y:20}, {x:33, y:20}, {x:34, y:20}, {x:35, y:20}, {x:36, y:20}, {x:37, y:20}, {x:38, y:20}, {x:39, y:20}, {x:40, y:20}, {x:41, y:20}, {x:42, y:20}, {x:43, y:20}, {x:44, y:20}, {x:45, y:20}, {x:46, y:20}, {x:47, y:20}, {x:47, y:20}, {x:48, y:20},
                   {x:6, y:21}, {x:7, y:21}, {x:8, y:21}, {x:9, y:21},{x:10, y:21}, {x:17, y:21}, {x:18, y:21}, {x:31, y:21}, {x:32, y:21}, {x:33, y:21}, {x:34, y:21}, {x:35, y:21}, {x:36, y:21}, {x:37, y:21}, {x:38, y:21}, {x:39, y:21}, {x:40, y:21}, {x:41, y:21}, {x:42, y:21}, {x:43, y:21}, {x:44, y:21}, {x:45, y:21}, {x:46, y:21}, {x:47, y:21}, {x:47, y:21}, {x:48, y:21}, {x:49, y:21}, 
                   {x:10, y:22},{x:11, y:22}, {x:16, y:22}, {x:17, y:22}, {x:18, y:22}, {x:31, y:22}, {x:32, y:22}, {x:33, y:22}, {x:34, y:22}, {x:35, y:22}, {x:36, y:22}, {x:37, y:22}, {x:38, y:22}, {x:39, y:22}, {x:40, y:22}, {x:41, y:22}, {x:42, y:22}, {x:43, y:22}, {x:44, y:22}, {x:45, y:22}, {x:46, y:22}, {x:47, y:22}, {x:47, y:22}, {x:48, y:22}, {x:49, y:22}, 
                   {x:10, y:23}, {x:12, y:23}, {x:15, y:23}, {x:17, y:23}, {x:18, y:23}, {x:19, y:23}, {x:20, y:23}, {x:21, y:23}, {x:22, y:23}, {x:23, y:23}, {x:24, y:23}, {x:25, y:23}, {x:26, y:23}, {x:27, y:23}, {x:28, y:23}, {x:29, y:23}, {x:30, y:23}, {x:31, y:23}, {x:32, y:23}, {x:33, y:23}, {x:34, y:23}, {x:35, y:23}, {x:36, y:23}, {x:37, y:23}, {x:38, y:23}, {x:39, y:23}, {x:40, y:23}, {x:41, y:23}, {x:42, y:23}, {x:43, y:23}, {x:44, y:23}, {x:45, y:23}, {x:46, y:23}, {x:47, y:23}, {x:47, y:23}, {x:48, y:23},
                   {x:10, y:24}, {x:13, y:24}, {x:14, y:24}, {x:17, y:24}, {x:18, y:24}, {x:19, y:24}, {x:20, y:24}, {x:21, y:24}, {x:22, y:24}, {x:23, y:24}, {x:24, y:24}, {x:25, y:24}, {x:26, y:24}, {x:27, y:24}, {x:28, y:24}, {x:29, y:24}, {x:30, y:24}, {x:31, y:24}, {x:32, y:24}, {x:33, y:24}, {x:34, y:24}, {x:35, y:24}, {x:36, y:24}, {x:37, y:24}, {x:38, y:24}, {x:39, y:24}, {x:40, y:24}, {x:41, y:24}, {x:42, y:24}, {x:43, y:24}, {x:44, y:24}, {x:45, y:24}, {x:46, y:24}, {x:47, y:24},
                   {x:10, y:25}, {x:17, y:25}, {x:18, y:25}, {x:19, y:25}, {x:20, y:25}, {x:21, y:25}, {x:22, y:25}, {x:23, y:25}, {x:24, y:25}, {x:25, y:25}, {x:26, y:25}, {x:27, y:25}, {x:28, y:25}, {x:29, y:25}, {x:30, y:25}, {x:31, y:25}, {x:32, y:25}, {x:33, y:25}, {x:34, y:25}, {x:35, y:25}, {x:36, y:25}, {x:37, y:25}, {x:38, y:25}, {x:39, y:25}, {x:40, y:25}, {x:41, y:25}, {x:42, y:25}, {x:43, y:25}, {x:44, y:25},{x:45, y:25}, {x:46, y:25},
                   {x:10, y:26}, {x:24, y:26}, {x:25, y:26}, {x:26, y:26}, {x:27, y:26}, {x:28, y:26},
                   {x:25, y:27}, {x:26, y:27}, {x:27, y:27},
                   {x:26, y:28},
                   {x:15, y:29}, {x:16, y:29}, {x:17, y:29}, {x:18, y:29}, {x:19, y:29}, {x:20, y:29}, {x:21, y:29}, {x:22, y:29}, {x:23, y:29}, {x:24, y:29}, {x:25, y:29}, {x:26, y:29}, {x:27, y:29}, {x:28, y:29}, {x:29, y:29}, {x:30, y:29}, {x:31, y:29}, {x:32, y:29}, {x:33, y:29}, {x:34, y:29}, {x:35, y:29}, {x:36, y:29},
                   {x:17, y:30}, {x:18, y:30}, {x:19, y:30}, {x:20, y:30}, {x:21, y:30}, {x:22, y:30}, {x:23, y:30}, {x:24, y:30}, {x:25, y:30}, {x:26, y:30}, {x:27, y:30}, {x:28, y:30}, {x:29, y:30}, {x:30, y:30}, {x:31, y:30}, {x:32, y:30}, {x:33, y:30}, {x:34, y:30}, {x:35, y:30}, {x:36, y:30}, {x:37, y:30}, {x:38, y:30}, {x:39, y:30}, 
                   {x:15, y:31}, {x:16, y:31}, {x:17, y:31}, {x:18, y:31}, {x:19, y:31}, {x:20, y:31}, {x:21, y:31}, {x:22, y:31}, {x:23, y:31}, {x:24, y:31}, {x:25, y:31}, {x:26, y:31}, {x:27, y:31}, {x:28, y:31}, {x:29, y:31}, {x:30, y:31}, {x:31, y:31}, {x:32, y:31}, {x:33, y:31}, {x:34, y:31}, {x:35, y:31}, {x:36, y:31}, {x:37, y:31}, {x:38, y:31}, {x:39, y:31}, {x:40, y:31}, {x:41, y:31}, {x:42, y:31},
                   {x:24, y:32}, {x:25, y:32}, {x:26, y:32}, {x:27, y:32}, {x:28, y:32},
                   {x:25, y:33}, {x:26, y:33}, {x:27, y:33},
                   {x:26, y:34},
                   {x:26, y:35},
                   {x:25, y:36}, {x:26, y:36}, {x:27, y:36},
                   {x:15, y:37}, {x:16, y:37}, {x:17, y:37}, {x:18, y:37}, {x:19, y:37}, {x:20, y:37}, {x:21, y:37}, {x:22, y:37}, {x:23, y:37}, {x:24, y:37}, {x:25, y:37}, {x:26, y:37}, {x:27, y:37}, {x:28, y:37}, {x:29, y:37}, {x:30, y:37}, 
                   {x:17, y:38}, {x:18, y:4}, {x:19, y:38}, {x:20, y:38}, {x:21, y:38}, {x:22, y:38}, {x:23, y:38}, {x:24, y:38}, {x:25, y:38}, {x:26, y:38}, {x:27, y:38}, {x:28, y:38}, {x:29, y:38}, {x:30, y:38}, {x:31, y:38}, {x:32, y:38}, {x:33, y:38},
                   {x:15, y:39}, {x:16, y:39}, {x:17, y:39}, {x:18, y:39}, {x:19, y:39}, {x:20, y:39}, {x:21, y:39}, {x:22, y:39}, {x:23, y:39}, {x:24, y:39}, {x:25, y:39}, {x:26, y:39}, {x:27, y:39}, {x:28, y:39}, {x:29, y:39}, {x:30, y:39}, {x:31, y:39}, {x:32, y:39}, {x:33, y:39}, {x:34, y:39}, {x:35, y:39}, {x:36, y:39},
                   ],
  };
}

function initJerrySpaceship2() {
  spaceship = {
      coordinates:[
                   {x:15, y:4}, {x:16, y:4}, {x:17, y:4}, {x:18, y:4}, {x:19, y:4}, {x:20, y:4}, {x:21, y:4}, {x:22, y:4}, {x:23, y:4}, {x:24, y:4}, {x:25, y:4}, {x:26, y:4}, {x:27, y:4}, {x:28, y:4}, {x:29, y:4}, {x:30, y:4}, {x:31, y:4}, {x:32, y:4}, {x:33, y:4}, {x:34, y:4}, {x:35, y:4}, {x:36, y:4},
                   {x:17, y:5}, {x:18, y:4}, {x:19, y:5}, {x:20, y:5}, {x:21, y:5}, {x:22, y:5}, {x:23, y:5}, {x:24, y:5}, {x:25, y:5}, {x:26, y:5}, {x:27, y:5}, {x:28, y:5}, {x:29, y:5}, {x:30, y:5},
                   {x:15, y:6}, {x:16, y:6}, {x:17, y:6}, {x:18, y:6}, {x:19, y:6}, {x:20, y:6}, {x:21, y:6}, {x:22, y:6}, {x:23, y:6}, {x:24, y:6}, {x:25, y:6}, {x:26, y:6}, {x:27, y:6}, {x:28, y:6}, {x:29, y:6}, {x:30, y:6}, 
                   {x:23, y:7}, {x:24, y:7}, {x:25, y:7}, {x:26, y:7}, 
                   {x:23, y:8}, {x:24, y:8}, {x:25, y:8}, {x:26, y:8}, 
                   {x:23, y:9}, {x:24, y:9}, {x:25, y:9}, {x:26, y:9}, 
                   {x:23, y:10}, {x:24, y:10}, {x:25, y:10}, {x:26, y:10}, 
                   {x:23, y:11}, {x:24, y:11}, {x:25, y:11}, {x:26, y:11}, 
                   {x:23, y:12}, {x:24, y:12}, {x:25, y:12}, {x:26, y:12}, 
                   {x:23, y:13}, {x:24, y:13}, {x:25, y:13}, {x:26, y:13}, 
                   {x:23, y:14}, {x:24, y:14}, {x:25, y:14}, {x:26, y:14}, 
                   {x:23, y:15}, {x:24, y:15}, {x:25, y:15}, {x:26, y:15},
                   {x:22, y:16}, {x:23, y:16}, {x:24, y:16}, {x:25, y:16}, {x:26, y:16}, {x:27, y:16},
                   {x:10, y:17}, {x:21, y:17}, {x:22, y:17}, {x:23, y:17}, {x:24, y:17}, {x:25, y:17}, {x:26, y:17}, {x:27, y:17}, {x:28, y:17},
                   {x:10, y:18}, {x:17, y:18}, {x:18, y:18}, {x:19, y:18}, {x:20, y:18}, {x:21, y:18}, {x:22, y:18}, {x:23, y:18}, {x:24, y:18}, {x:25, y:18}, {x:26, y:18}, {x:27, y:18}, {x:28, y:18}, {x:29, y:18}, {x:30, y:18}, {x:31, y:18}, {x:32, y:18}, {x:33, y:18}, {x:34, y:18}, {x:35, y:18}, {x:36, y:18}, {x:37, y:18}, {x:38, y:18}, {x:39, y:18}, {x:40, y:18}, {x:41, y:18}, {x:42, y:18}, {x:43, y:18}, {x:44, y:18},{x:45, y:18}, {x:46, y:18},
                   {x:10, y:19}, {x:17, y:19}, {x:18, y:19}, {x:19, y:19}, {x:20, y:19}, {x:21, y:19}, {x:22, y:19}, {x:23, y:19}, {x:24, y:19}, {x:25, y:19}, {x:26, y:19}, {x:27, y:19}, {x:28, y:19}, {x:29, y:19}, {x:30, y:19}, {x:31, y:19}, {x:32, y:19}, {x:33, y:19}, {x:34, y:19}, {x:35, y:19}, {x:36, y:19}, {x:37, y:19}, {x:38, y:19}, {x:39, y:19}, {x:40, y:19}, {x:41, y:19}, {x:42, y:19}, {x:43, y:19}, {x:44, y:19}, {x:45, y:19}, {x:46, y:19}, {x:47, y:19},
                   {x:10, y:20}, {x:17, y:20}, {x:18, y:20}, {x:19, y:20}, {x:20, y:20}, {x:21, y:20}, {x:22, y:20}, {x:23, y:20}, {x:24, y:20}, {x:25, y:20}, {x:26, y:20}, {x:27, y:20}, {x:28, y:20}, {x:29, y:20}, {x:30, y:20}, {x:31, y:20}, {x:32, y:20}, {x:33, y:20}, {x:34, y:20}, {x:35, y:20}, {x:36, y:20}, {x:37, y:20}, {x:38, y:20}, {x:39, y:20}, {x:40, y:20}, {x:41, y:20}, {x:42, y:20}, {x:43, y:20}, {x:44, y:20}, {x:45, y:20}, {x:46, y:20}, {x:47, y:20}, {x:47, y:20}, {x:48, y:20},
                   {x:6, y:21}, {x:7, y:21}, {x:8, y:21}, {x:9, y:21},{x:10, y:21}, {x:17, y:21}, {x:18, y:21}, {x:31, y:21}, {x:32, y:21}, {x:33, y:21}, {x:34, y:21}, {x:35, y:21}, {x:36, y:21}, {x:37, y:21}, {x:38, y:21}, {x:39, y:21}, {x:40, y:21}, {x:41, y:21}, {x:42, y:21}, {x:43, y:21}, {x:44, y:21}, {x:45, y:21}, {x:46, y:21}, {x:47, y:21}, {x:47, y:21}, {x:48, y:21}, {x:49, y:21}, 
                   {x:10, y:22},{x:11, y:22}, {x:16, y:22}, {x:17, y:22}, {x:18, y:22}, {x:31, y:22}, {x:32, y:22}, {x:33, y:22}, {x:34, y:22}, {x:35, y:22}, {x:36, y:22}, {x:37, y:22}, {x:38, y:22}, {x:39, y:22}, {x:40, y:22}, {x:41, y:22}, {x:42, y:22}, {x:43, y:22}, {x:44, y:22}, {x:45, y:22}, {x:46, y:22}, {x:47, y:22}, {x:47, y:22}, {x:48, y:22}, {x:49, y:22}, 
                   {x:10, y:23}, {x:12, y:23}, {x:15, y:23}, {x:17, y:23}, {x:18, y:23}, {x:19, y:23}, {x:20, y:23}, {x:21, y:23}, {x:22, y:23}, {x:23, y:23}, {x:24, y:23}, {x:25, y:23}, {x:26, y:23}, {x:27, y:23}, {x:28, y:23}, {x:29, y:23}, {x:30, y:23}, {x:31, y:23}, {x:32, y:23}, {x:33, y:23}, {x:34, y:23}, {x:35, y:23}, {x:36, y:23}, {x:37, y:23}, {x:38, y:23}, {x:39, y:23}, {x:40, y:23}, {x:41, y:23}, {x:42, y:23}, {x:43, y:23}, {x:44, y:23}, {x:45, y:23}, {x:46, y:23}, {x:47, y:23}, {x:47, y:23}, {x:48, y:23},
                   {x:10, y:24}, {x:13, y:24}, {x:14, y:24}, {x:17, y:24}, {x:18, y:24}, {x:19, y:24}, {x:20, y:24}, {x:21, y:24}, {x:22, y:24}, {x:23, y:24}, {x:24, y:24}, {x:25, y:24}, {x:26, y:24}, {x:27, y:24}, {x:28, y:24}, {x:29, y:24}, {x:30, y:24}, {x:31, y:24}, {x:32, y:24}, {x:33, y:24}, {x:34, y:24}, {x:35, y:24}, {x:36, y:24}, {x:37, y:24}, {x:38, y:24}, {x:39, y:24}, {x:40, y:24}, {x:41, y:24}, {x:42, y:24}, {x:43, y:24}, {x:44, y:24}, {x:45, y:24}, {x:46, y:24}, {x:47, y:24},
                   {x:10, y:25}, {x:17, y:25}, {x:18, y:25}, {x:19, y:25}, {x:20, y:25}, {x:21, y:25}, {x:22, y:25}, {x:23, y:25}, {x:24, y:25}, {x:25, y:25}, {x:26, y:25}, {x:27, y:25}, {x:28, y:25}, {x:29, y:25}, {x:30, y:25}, {x:31, y:25}, {x:32, y:25}, {x:33, y:25}, {x:34, y:25}, {x:35, y:25}, {x:36, y:25}, {x:37, y:25}, {x:38, y:25}, {x:39, y:25}, {x:40, y:25}, {x:41, y:25}, {x:42, y:25}, {x:43, y:25}, {x:44, y:25},{x:45, y:25}, {x:46, y:25},
                   {x:10, y:26}, {x:21, y:26}, {x:22, y:26}, {x:23, y:26}, {x:24, y:26}, {x:25, y:26}, {x:26, y:26}, {x:27, y:26}, {x:28, y:26},
                   {x:22, y:27}, {x:23, y:27}, {x:24, y:27}, {x:25, y:27}, {x:26, y:27}, {x:27, y:27},
                   {x:23, y:28}, {x:24, y:28}, {x:25, y:28}, {x:26, y:28},
                   {x:23, y:29}, {x:24, y:29}, {x:25, y:29}, {x:26, y:29}, 
                   {x:23, y:30}, {x:24, y:30}, {x:25, y:30}, {x:26, y:30}, 
                   {x:23, y:31}, {x:24, y:31}, {x:25, y:31}, {x:26, y:31},
                   {x:23, y:32}, {x:24, y:32}, {x:25, y:32}, {x:26, y:32}, 
                   {x:23, y:33}, {x:24, y:33}, {x:25, y:33}, {x:26, y:33}, 
                   {x:23, y:34}, {x:24, y:34}, {x:25, y:34}, {x:26, y:34}, 
                   {x:23, y:35}, {x:24, y:35}, {x:25, y:35}, {x:26, y:35}, 
                   {x:23, y:36}, {x:24, y:36}, {x:25, y:36}, {x:26, y:36}, 
                   {x:15, y:37}, {x:16, y:37}, {x:17, y:37}, {x:18, y:37}, {x:19, y:37}, {x:20, y:37}, {x:21, y:37}, {x:22, y:37}, {x:23, y:37}, {x:24, y:37}, {x:25, y:37}, {x:26, y:37}, {x:27, y:37}, {x:28, y:37}, {x:29, y:37}, {x:30, y:37}, 
                   {x:17, y:38}, {x:18, y:4}, {x:19, y:38}, {x:20, y:38}, {x:21, y:38}, {x:22, y:38}, {x:23, y:38}, {x:24, y:38}, {x:25, y:38}, {x:26, y:38}, {x:27, y:38}, {x:28, y:38}, {x:29, y:38}, {x:30, y:38}, 
                   {x:15, y:39}, {x:16, y:39}, {x:17, y:39}, {x:18, y:39}, {x:19, y:39}, {x:20, y:39}, {x:21, y:39}, {x:22, y:39}, {x:23, y:39}, {x:24, y:39}, {x:25, y:39}, {x:26, y:39}, {x:27, y:39}, {x:28, y:39}, {x:29, y:39}, {x:30, y:39}, {x:31, y:39}, {x:32, y:39}, {x:33, y:39}, {x:34, y:39}, {x:35, y:39}, {x:36, y:39},
                   ],
  };
}

function initJerrySpaceship3() {
  spaceship = {
      coordinates:[
{x:10, y:1}, {x:11, y:1},
{x:10, y:2}, {x:11, y:2},
{x:9, y:3}, {X:10, y:3}, {x:11, y:3}, {x:12, y:3}, {x:13, y:3}, {x:14, y:3}, {x:15, y:3},
{x:10, y:4}, {x:11, y:4},
{x:10, y:5}, {x:11, y:5}, {x:12, y:5},
{x:10, y:6}, {x:11, y:6}, {x:12, y:6}, {x:13, y:6},
{x:8, y:7}, {x:9, y:7}, {x:10, y:7}, {x:11, y:7}, {x:12, y:7}, {x:13, y:7}, {x:14, y:7}, {x:15, y:7}, {x:16, y:7}, {x:17, y:7},
{x:8, y:8}, {x:9, y:8}, {x:10, y:8}, {x:11, y:8}, {x:12, y:8}, {x:13, y:8}, {x:14, y:8}, {x:15, y:8}, {x:16, y:8}, {x:17, y:8}, {x:18, y:8},
{x:9, y:9}, {x:10, y:9}, {x:11, y:9}, {x:12, y:9},  {x:18, y:9}, {x:19, y:9},
{x:9, y:10}, {x:10, y:10}, {x:11, y:10}, {x:12, y:10},  {x:18, y:10}, {x:19, y:10},
{x:8, y:11}, {x:9, y:11}, {x:10, y:11}, {x:11, y:11}, {x:12, y:11}, {x:13, y:11}, {x:14, y:11}, {x:15, y:11}, {x:16, y:11}, {x:17, y:11}, {x:18, y:11},
{x:8, y:12}, {x:9, y:12}, {x:10, y:12}, {x:11, y:12}, {x:12, y:12}, {x:13, y:12}, {x:14, y:12}, {x:15, y:12}, {x:16, y:12}, {x:17, y:12},
{x:10, y:13}, {x:11, y:13}, {x:12, y:13}, {x:13, y:13},
{x:10, y:14}, {x:11, y:14}, {x:12, y:14},
{x:10, y:15}, {x:11, y:15},
{x:9, y:16}, {X:10, y:16}, {x:11, y:16}, {x:12, y:16}, {x:13, y:16}, {x:14, y:16}, {x:15, y:16},
{x:10, y:17}, {x:11, y:17},
{x:10, y:18}, {x:11, y:18},
],
  };
}

function initJerrySpaceshipFire () {
  fire= {
      coordinates:[

{x:3, y:6}, {x:4, y:6}, {x:5, y:6},
{x:1, y:7}, {x:2, y:7}, {x:3, y:7},
{x:2, y:8}, {x:4, y:8}, {x:6, y:8},
{x:3, y:9}, {x:4, y:9}, {x:5, y:9},

{x:3, y:11}, {x:4, y:11}, {x:5, y:11},
{x:1, y:12}, {x:2, y:12}, {x:3, y:12}, {x:5, y:12},
{x:2, y:13}, {x:3, y:13}, {x:4, y:13}, {x:6, y:13},
{x:4, y:14}, {x:5, y:14},
]
  }
}

function initWillSpaceshipFire () {
  fire= {
      coordinates:[

{x:3, y:4}, {x:4, y:4}, {x:5, y:4},
{x:1, y:5}, {x:2, y:5}, {x:3, y:5},
{x:2, y:6}, {x:4, y:6}, {x:6, y:6},
{x:3, y:7}, {x:4, y:7}, {x:5, y:7},

]
  }
}

function initSpaceshipFire () {
  fire= {
      coordinates:[
             {x:0,y:0}, 
             {x:0,y:1}, 
             {x:0,y:2}, 
             {x:0,y:3}, 
             {x:0,y:4}, 
             {x:0,y:5}, 
             {x:0,y:6},
             {x:0,y:7}, 
             {x:0,y:8}, 
             {x:0,y:9}, 
             {x:0,y:10},
             {x:0,y:12},
             {x:0,y:13},
             {x:0,y:14},
             {x:0,y:15}, 
             {x:0,y:16}, 
             {x:0,y:17},
             ]
  }
}

function createAsteroids() {

  var asteroids = [];
  for (i = 0; i < asteroidCount; i++) {
    var speed = Math.floor((Math.random() * maxSpeed) + 1);
    var xOffset = Math.floor((Math.random() * (canvasWidth * speed)) + 100); 
    var yOffset = Math.floor((Math.random() * canvasHeight) - 50); 
    var width = Math.floor((Math.random() * 100) + 10); 
    var height = Math.floor((Math.random() * 100) + 10); 
    var randX = 1;
    var randY = 1;  
    asteroids[i] = { coordinates:[], speed:speed};
    for (var x = xOffset; x< xOffset + width; x += randX) {
      randX = Math.floor((Math.random() * 3) + 1);
      for (var y = yOffset; y < yOffset + height; y+= randY) {
        randY = Math.floor((Math.random() * 3) + 1);
        asteroids[i].coordinates.push ({x:x, y:y});
      }
    }
  }
  return asteroids;
}


function checkForHit (spaceship, asteroid) {
  for(var i=0; i< asteroid.coordinates.length; i++) {
    if (asteroid.coordinates[i].x <= canvasWidth && asteroid.coordinates[i].x >= 0) {
      gameBeaten=false;
      for(var j=0; j< spaceship.coordinates.length; j++) {
        if (spaceship.coordinates[j].x === asteroid.coordinates[i].x && spaceship.coordinates[j].y === asteroid.coordinates[i].y) {
          gameOver = true;
          return;
        }
      }
    }
  }
}

function moveAsteroid (asteroid, spaceship) {
  ctx.fillStyle="gray";
  if ((asteroid.coordinates[0].x <= canvasWidth + 100) && (asteroid.coordinates[0].x >= -100)) {
    gameBeaten=false;
    for (var i = 1; i<= asteroid.speed; i++) {
      asteroid.coordinates.forEach ( function (coordinate) { 
        coordinate.x--;
        
        // check for asteroid hit with spaceship
        if (i == asteroid.speed) {
          ctx.fillRect(coordinate.x, coordinate.y, 1, 1);
          
          for(var j=0; j< spaceship.coordinates.length; j++) {
            if (spaceship.coordinates[j].x === coordinate.x && spaceship.coordinates[j].y === coordinate.y) {
              gameOver = true;
              return;
            }
          }
        } 
      });
    }
  }
}


function draw (item, color) {
  maxX = 0;
  minX = canvasWidth;
  maxY = 0;
  minY = canvasHeight;
  ctx.fillStyle=color;
  item.coordinates.forEach ( function (coordinate) { 
    ctx.fillRect(coordinate.x, coordinate.y, 1, 1);
    if (coordinate.x < minX) {
      minX = coordinate.x;
    } 
    if (coordinate.x > maxX) {
      maxX = coordinate.x;
    }
    if (coordinate.y < minY) {
      minY = coordinate.y;
    } 
    if (coordinate.y > maxY) {
      maxY = coordinate.y;
    }
  });
}

function checkForMove (spaceship) {
  draw (spaceship, "white");
  if(input.isDown('DOWN')) {
    if (maxY < canvasHeight) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.y++;
      });
      fire.coordinates.forEach ( function (coordinate) { 
        coordinate.y++;
      });
    }
  }
  if(input.isDown('UP')) {
    if (minY > 0) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.y--;
      });
      fire.coordinates.forEach ( function (coordinate) { 
        coordinate.y--;
      });
    }
  }
  if(input.isDown('LEFT')) {
    if (minX > 0) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.x--;
      });
      fire.coordinates.forEach ( function (coordinate) { 
        coordinate.x--;
      });
    }
  }
  if(input.isDown('RIGHT') || input.isDown('d')) {
    if (maxX < canvasWidth) {
      spaceship.coordinates.forEach ( function (coordinate) { 
        coordinate.x++;
      });
      fire.coordinates.forEach ( function (coordinate) { 
        coordinate.x++;
      });
      draw (fire, "red");
    }
  }
}

function main () {
  checkForMove (spaceship);
  checkForMove (spaceship);
  ctx.drawImage(spaceBackground, 0, 0);
  checkForMove (spaceship);
  checkForMove (spaceship);
  gameBeaten=true;
  for(var i=0; i< asteroids.length; i++) {
    moveAsteroid (asteroids[i], spaceship);
    //checkForHit (asteroids[i], spaceship);
  }
  if (gameOver) {
    ctx.fillStyle = "black";
    ctx.font = "bold 24px Arial";
    ctx.fillText("GAME OVER", 450, 400);
    score--;
    document.cookie=player + "=" + score + "; path=/"; 
    document.getElementById ("score").innerHTML = score;
    disableButtons(null);
    return;
  }
  if (gameBeaten) {
      ctx.fillStyle = "black";
      ctx.font = "bold 24px Arial";
      if (level === "beginner") {
        ctx.fillText("Congratulations " + player + "! You are on the way.", 400, 400);
        score++;
      } else if (level === "intermediate") {
        ctx.fillText("Congratulations " + player + "! You are actually pretty good.", 400, 400);
        score+=5;
      } else if (level === "expert") {
        ctx.fillText("Congratulations " + player + "! You are an epic space pilot!", 400, 400);
        score+=20;
      }
      document.cookie=player + "=" + score + "; path=/"; 
      document.getElementById ("score").innerHTML = score;
      disableButtons(null);
      return;
  } 
  if (!paused) {
    setTimeout(main, 1000/60); 
  }
}

function disableButtons(disabled) {
  document.getElementById("jerryButton1").disabled=disabled;
  document.getElementById("jerryButton2").disabled=disabled;
  document.getElementById("jerryButton3").disabled=disabled;
  document.getElementById("willButton").disabled=disabled;
  document.getElementById("mattyButton").disabled=disabled;
  document.getElementById("bryanButton").disabled=disabled;
}

function init () {
  disableButtons(true);
  if (level === "beginner") {
    asteroidCount = 100;
    maxSpeed = 2;
  } else if (level === "intermediate") {
    asteroidCount = 180;
    maxSpeed = 3;
  } else if (level === "expert") {
    asteroidCount = 230;
    maxSpeed = 3;
  }
  gameBeaten = false;
  gameOver = false;
  
  if (player === "Will") {
    initWillSpaceship();
    initWillSpaceshipFire();
    
  } else if (player === "Jerry") {
    initJerrySpaceship3();
    initJerrySpaceshipFire();
  } else {
    initSpaceship();
    initSpaceshipFire();
  }
  asteroids = createAsteroids();
  document.getElementById ("player").innerHTML = player;
  score = getCookieScore (player);
  document.getElementById ("score").innerHTML = score;
  setTimeout(main, 1000/60);
}

var asteroids =[];
var score = 0;
var player = "";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidth = canvas.width = 1100;
var canvasHeight = canvas.height = 650;
var maxX = 0;
var minX = canvasWidth;
var maxY = 0;
var minY = canvasHeight;
var gameBeaten = false;
var gameOver = false;
var maxSpeed = 3;
var paused = false;
var spaceship;
var fire;
var asteroidCount = 0;
document.body.appendChild(canvas);
var spaceBackground = new Image();
spaceBackground.src = "../img/space_background.png";
spaceBackground.onload = function() {
  ctx.drawImage(spaceBackground, 0, 0);
}


document.addEventListener('keydown', function(e) {
  if (String.fromCharCode(e.keyCode) == 'P') {
    if (paused) {
      paused = false;
      setTimeout(main, 1000/60);
    } else {
      paused = true;
    }
  }
});


