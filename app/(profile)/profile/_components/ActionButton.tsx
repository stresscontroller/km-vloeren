import { Button } from '@/components/ui/button';

interface ActionButtonProps {
  isEdit: boolean;
  setEdit: (value: boolean) => void;
}

const ActionButton = (props: ActionButtonProps) => {
  return (
    <>
      {props.isEdit ? (
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="w-[8rem] whitespace-nowrap"
            onClick={() => props.setEdit(false)}
          >
            Cancel
          </Button>
          <Button className="bg-primary text-white w-[8rem] whitespace-nowrap">
            Save
          </Button>
        </div>
      ) : (
        <Button
          className="bg-primary text-white w-[8rem] whitespace-nowrap"
          onClick={() => props.setEdit(true)}
        >
          Edit Profile
        </Button>
      )}
    </>
  );
};

export default ActionButton;
