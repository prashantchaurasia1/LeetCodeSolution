public class Solution {
    public bool IsValid(string s) {
        
        if(s.Trim() == String.Empty){
            return true;
        }
        List<char> _stack = new List<char>();
		Dictionary<char, char> tagsCombo = new Dictionary<char, char>(){ 
                                                { '(' , ')' },
                                                { '{' , '}' },
                                                { '[' , ']' }
                                            };
		
		for(var i = 0; i < s.Length; i++){
            try{
				if( tagsCombo.ContainsKey( s[i] ) == true ) {
					_stack.Add(tagsCombo[s[i]]);
				} else if( _stack[_stack.Count-1] == s[i] ) {
					_stack.RemoveAt(_stack.Count-1);
				} else if( tagsCombo.ContainsValue( s[i] ) == true && _stack[_stack.Count-1] != s[i]){
					return false;
				}
			}
			catch {
				return false;
			}
        }
		return _stack.Count == 0;
		
    }
}
