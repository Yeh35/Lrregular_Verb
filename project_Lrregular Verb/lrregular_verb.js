var ar_verb_indexes;
var l_index_selection = 0;
var l_index_check;
var ar_wrong;

document.write('<script src="verb.js"></script>');

function f_start_exam(txt_in, txt_ps, txt_pp)
{
    ar_verb_indexes = f_get_random_index(ar_lrregular_verb.length);
    l_index_selection = 0;
    ar_wrong = Array();

    f_exam_setting(0, txt_in, txt_ps, txt_pp);
}

function f_exam_next(txt_in, txt_ps, txt_pp)
{
    var verb_value = ar_lrregular_verb[ar_verb_indexes[l_index_selection]];

    if( !( verb_value[0] == txt_in.value && verb_value[1] == txt_ps.value && verb_value[2] == txt_pp.value ) )
    {
      alert( "정답을 맞혀야 다음으로 넘어갈 수 있습니다.\n" + verb_value[0] + ", " + verb_value[1] + ", " + verb_value[2]);
      if (l_index_check != l_index_selection) {
        l_index_check = l_index_selection;
        ar_wrong[ar_wrong.length] = {l_index_selection, txt_in, txt_ps, txt_pp};
        console.log( 'add ar_wrong length : '  + ar_wrong.length + ', value = ' + txt_in );
      }
      return;
    }

    l_index_selection = l_index_selection + 1;

    //배열에 시작은 0이다보니 -1
    if ( l_index_selection > ar_lrregular_verb.length -1)
    {
      window.location.replace("finish.html");
    }

    f_exam_setting(l_index_selection, txt_in, txt_ps, txt_pp);
}

function f_exam_setting(index, txt_in, txt_ps, txt_pp)
{
  //var i_random = Math.floor(Math.random() * 3);
  var i_random = 0;
  var verb_value = ar_lrregular_verb[ar_verb_indexes[index]];
  /*
  txt_in.disabled = !(i_random = 0);
  txt_ps.disabled = !(i_random = 1);
  txt_pp.disabled = !(i_random = 2);

  txt_in.value = (i_random != 0 ? verb_value[0] : "");
  txt_ps.value = (i_random != 1 ? verb_value[1] : "");
  txt_pp.value = (i_random != 2 ? verb_value[2] : "");
  */
  txt_in.disabled = true;
  txt_ps.disabled = false;
  txt_pp.disabled = false;

  txt_in.value = verb_value[0];
  txt_ps.value = "";
  txt_pp.value = "";

}

function f_get_problem()
{
    return ar_lrregular_verb[ar_verb_indexes[l_index_selection]];
}

function f_get_random_index( maxinum )
{
  var array = new Array(maxinum);
  var tmp, current, top = maxinum;

  for (i=0;i<maxinum;++i) array[i]=i;

  if(top)
    while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
  	}

  return array;
}
