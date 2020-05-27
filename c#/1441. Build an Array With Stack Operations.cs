public class Solution {
    public IList<string> BuildArray (int[] target, int n) {
        List<string> operationsList = new List<string> ();
        List<int> numChecked = new List<int> ();

        for (int i = 1; i <= n; i++) {
            if (target.Length == numChecked.Count) {
                break;
            }

            if (target.Contains (i) == false) {
                operationsList.Add ("Push");
                operationsList.Add ("Pop");
                continue;
            }
            operationsList.Add ("Push");
            numChecked.Add (i);

        }
        return operationsList;
    }
}